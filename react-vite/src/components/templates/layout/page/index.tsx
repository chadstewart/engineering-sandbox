import { Outlet } from "@tanstack/react-router";

export const PageLayout = () => {
  return (
    <div className="px-2">
      <header className="hidden lg:block border-b-2">
        <h2 className="font-semibold">
          Page Title
        </h2>
      </header>
      <Outlet />
    </div>
  )
};