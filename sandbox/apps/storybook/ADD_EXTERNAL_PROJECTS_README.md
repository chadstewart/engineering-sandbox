# Rendering External Projects in Storybook

This Storybook instance lives in `apps/storybook` but renders stories from
other packages in the monorepo (currently `packages/ui`, the primary design
system, and `apps/showcase`). Because those components live outside
`apps/storybook`, Tailwind v4's automatic content detection doesn't pick them
up by default, and their classes get stripped from the generated CSS. This
document describes how that's wired up, and what to do when adding another
external project.

## Why this is needed

Tailwind v4 scans source files for class names starting from wherever its
CSS entry point is imported. Storybook's entry point is
[`preview.tsx`](./preview.tsx), which lives inside `apps/storybook`. Tailwind
has no reason to look inside sibling packages/apps unless it's told to, so
any component imported from `packages/ui` or `apps/showcase` renders in
Storybook with unstyled (or partially styled) markup, even though the same
component looks correct when built inside its own app.

Fixing this requires two things working together:

1. Tailwind needs to be told to scan the external packages' source files
   (`@source`).
2. Each external package needs to actually resolve as an importable
   workspace package with the paths Storybook references (`exports` in
   `package.json`).

## The pieces

### 1. `external-projects.css`

[`external-projects.css`](./external-projects.css) is the single place that
tells Tailwind about styles and source files living outside
`apps/storybook`:

```css
/* Base Styles from Primary Design System */
@import "@engineering-sandbox/ui/storybook-globals.css";

/* Import for Components from Primary Design System */
@source "../../../packages/ui/src/components/**/*.{ts,tsx}";

/* Import for Components from Projects */
@source "../../../apps/showcase/src/components/**/*.{ts,tsx}";
```

- `@import` pulls in the design system's base Tailwind layer (theme tokens,
  `@theme inline` config, dark mode variant, etc.) from
  `packages/ui/src/styles/globals.css`, via a dedicated `storybook-globals.css`
  export (see below). Without this, component classes may compile, but the
  CSS variables and `@theme` values they depend on (colors, radii, etc.)
  won't exist.
- `@source` tells Tailwind's scanner to also look at that path for class
  names, in addition to whatever `apps/storybook` already scans. **Use a
  relative filesystem path here, not a package specifier.** An earlier
  attempt used `@source "@engineering-sandbox/ui/src/**/*.{ts,tsx}"`, which
  did not reliably resolve — a plain relative path from `.storybook/` up
  through the monorepo works consistently.

### 2. `preview.tsx`

[`preview.tsx`](./preview.tsx) imports the file above so Storybook actually
loads it as part of the global preview:

```ts
import './external-projects.css'
```

This is the only line needed here — all the actual source/import
configuration stays in `external-projects.css`.

### 3. Workspace package `exports`

Because `@import "@engineering-sandbox/ui/storybook-globals.css"` resolves
through Node/Vite package resolution (not a relative path), the target
package must explicitly export that entry point. In
`packages/ui/package.json`:

```json
"exports": {
  "./storybook-globals.css": "./src/styles/globals.css",
  "./globals.css": "./dist/styles/globals.css",
  "./components/*": "./src/components/*",
  "./lib/utils": "./src/lib/utils.ts",
  "./package.json": "./package.json",
  "./*": "./dist/*.js"
}
```

Two things worth calling out:

- `./storybook-globals.css` points at the **source** `globals.css`
  (`src/styles/...`), not the built `dist/styles/...` file that
  `./globals.css` points to. Storybook (via Vite) runs against source, and
  waiting on a `dist` build being present/fresh was the root cause of
  components rendering unstyled early on (see the "not build built"
  history in this repo).
- `./package.json` must be exported too, or Node's resolver can't find the
  package root when other tools (e.g. Storybook's `getAbsolutePath` helper
  in [`main.ts`](./main.ts)) try to resolve `<package>/package.json`.

The same principle applies to any other workspace package you want
Storybook to render: it needs an `exports` entry for whatever subpath is
being imported or `@source`d.

Also note the `exports` map only resolves specific declared subpaths — a
broad `"./src/*": "./src/*"` entry does **not** make everything under `src`
importable the way you might expect. Prefer a narrow, explicit entry
per-need (e.g. `"./components/*": "./src/components/*"`), which is what
`apps/showcase/package.json` was changed to use.

### 4. Storybook's own `devDependencies` and `stories` glob

For Storybook to find and build stories from an external project at all
(separately from the styling problem above), it needs:

- The project listed as a workspace `devDependency` in
  `apps/storybook/package.json` (e.g. `"@engineering-sandbox/showcase":
  "workspace:*"`), so pnpm links it and Vite can resolve imports from it.
- A glob entry in the `stories` array of [`main.ts`](./main.ts) pointing at
  that project's `*.stories.@(js|jsx|mjs|ts|tsx)` files.

## Checklist: adding a new external project

1. In the target package's `package.json`, add an `exports` entry for
   `./package.json` if it isn't already there, plus explicit entries for
   any subpaths you need to import (components, a CSS entry point, etc.).
   Point CSS/style exports used by Storybook at source files, not built
   `dist` output.
2. Add the package as a `devDependency` (`workspace:*`) of
   `apps/storybook`.
3. Add a `stories` glob for the package in `.storybook/main.ts`.
4. Add an `@source "../../../<path>/src/**/*.{ts,tsx}"` line to
   `external-projects.css`, using a relative path (not a package
   specifier), pointing at the package's component source.
5. If the package has its own base styles/theme (colors, tokens, etc.) that
   aren't already pulled in transitively, add an `@import` for its CSS
   entry point above the `@source` lines.
6. Restart the Storybook dev server (Tailwind's `@source`/`@import`
   resolution is picked up at startup, not always hot-reloaded reliably
   mid-session).
