FROM node:lts-alpine as api-gateway
USER 0
RUN mkdir /app
COPY ./ /app
WORKDIR /app
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD node dist/services/server.js