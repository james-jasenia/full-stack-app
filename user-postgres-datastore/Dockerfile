FROM postgres

ENV POSTGRES_PASSWORD=password

COPY ./user-postgres-datastore/seed-scripts /docker-entrypoint-initdb.d/

EXPOSE 5432
