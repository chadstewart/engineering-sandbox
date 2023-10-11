FROM bitnami/postgresql:16.0.0 as postgres-container
ENV ALLOW_EMPTY_PASSWORD=yes
USER 0
RUN mkdir ./test-sql-db-dump
COPY ./northwind_psql_sql_example/northwind.sql ./test-sql-db-dump
EXPOSE 5432

FROM node:lts-alpine as graphql-server
ENV POSTGRESQL_USER=postgres
ENV POSTGRESQL_PASSWORD=postgres
ENV POSTGRESQL_DATABASE=test
ENV DATABASE_URL=postgresql://postgres:postgres@db:5432/test
USER 0
RUN mkdir /app
COPY ./microservice-graphql-example /app
WORKDIR /app
EXPOSE 4000
CMD npm run container