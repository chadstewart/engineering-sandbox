FROM node:lts-alpine as api-gateway
USER 0
COPY package.json /tmp
COPY package-lock.json /tmp
RUN cd /tmp && npm ci
RUN mkdir /app && cp -a /tmp/node_modules /app
COPY ./ /app
WORKDIR /app
RUN npm run build
EXPOSE 3000
CMD node dist/services/graphql-express-server.js