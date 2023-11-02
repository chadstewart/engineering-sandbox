FROM node:lts-alpine as graphql-server
USER 0
RUN mkdir /app
COPY ./ /app
WORKDIR /app
RUN npm ci
RUN npm run build
EXPOSE 4000
CMD node dist/services/graphql-express-server.js