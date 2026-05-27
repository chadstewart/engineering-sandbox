FROM docker:dind

RUN apk add nodejs npm git
RUN node --version && npm --version && git --version
RUN npm install -g pnpm
RUN pnpm --version