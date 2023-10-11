FROM node:lts-alpine as graphql-server
ENV POSTGRESQL_USER=postgres
ENV POSTGRESQL_PASSWORD=postgres
ENV POSTGRESQL_DATABASE=test
ENV DATABASE_URL=postgresql://postgres:postgres@db:5432/test
USER 0
RUN mkdir /app
COPY ./ /app
WORKDIR /app
EXPOSE 4000
CMD npm run container