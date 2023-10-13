FROM node:lts-alpine as rest-api
USER 0
RUN mkdir /app
COPY ./ /app
WORKDIR /app
EXPOSE 3001
CMD npm run container