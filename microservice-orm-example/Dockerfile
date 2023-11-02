FROM node:lts-alpine as rest-api
USER 0
RUN mkdir /app
COPY ./ /app
WORKDIR /app
RUN npm ci
RUN npm run build
EXPOSE 3001
CMD node dist/services/server.js