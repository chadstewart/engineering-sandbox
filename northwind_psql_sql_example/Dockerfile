FROM bitnami/postgresql:16.0.0 as postgres-container
USER 0
RUN mkdir /test-sql-db-dump
COPY ./northwind.sql /test-sql-db-dump
RUN if [ "$( psql -XtAc "SELECT 1 FROM pg_database WHERE datname='test'" )" != '1' ]; \
  then psql -c 'CREATE DATABASE test;' && psql test < /test-sql-db-dump/northwind.sql; \
  fi
EXPOSE 5432