#!/bin/sh

if [ "$( psql -U postgres -XtAc "SELECT 1 FROM pg_database WHERE datname='northwind'" )" != '1' ]; \
  then psql -U postgres -c 'CREATE DATABASE northwind;' && psql -U postgres northwind < /test-sql-db-dump/northwind.sql; \
fi