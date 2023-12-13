FROM bitnami/postgresql:16.0.0 as postgres-container
USER 0
RUN mkdir /test-sql-db-dump
COPY ./northwind.sql /test-sql-db-dump
COPY ./initialize-db.sh /docker-entrypoint-initdb.d
EXPOSE 5432