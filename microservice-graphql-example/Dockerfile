FROM node:lts-alpine as graphql-server
USER 0
COPY package.json /tmp
COPY package-lock.json /tmp
COPY ./prisma /tmp
RUN cd /tmp && npm ci
RUN mkdir /app && cp -a /tmp/node_modules /app
COPY ./ /app
WORKDIR /app
RUN npm run build
EXPOSE 4000
CMD node dist/services/graphql-express-server.js