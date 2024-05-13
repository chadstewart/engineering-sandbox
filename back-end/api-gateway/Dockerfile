FROM node:lts-alpine AS builder
WORKDIR /app
COPY ./ ./
RUN npm ci
RUN npm run build

FROM node:lts-alpine as api-gateway
RUN mkdir /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist
WORKDIR /app
EXPOSE 3000
CMD ["node", "dist/services/graphql-express-server.js"]