FROM node:lts-alpine as api-gateway
USER 0
RUN mkdir /app
COPY ./ /app
WORKDIR /app
EXPOSE 3000
CMD npm run container