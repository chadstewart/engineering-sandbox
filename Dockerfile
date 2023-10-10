FROM bitnami/postgresql:16.0.0
ENV ALLOW_EMPTY_PASSWORD=yes
USER 0
RUN mkdir ./test-sql-db-dump
COPY ./northwind_psql_sql_example/northwind.sql ./test-sql-db-dump
EXPOSE 5432
