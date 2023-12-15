FROM node:lts-alpine as rest-api
USER 0
COPY package.json /tmp
COPY package-lock.json /tmp
COPY ./prisma /tmp
RUN cd /tmp && npm ci
RUN mkdir /app && cp -a /tmp/node_modules /app
COPY ./ /app
WORKDIR /app
RUN npm run swagger-autogen && npm run build
EXPOSE 3001
CMD node dist/services/server.js