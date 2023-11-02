-- Seed Table
CREATE TABLE users (
  id serial PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  firstName VARCHAR (50) UNIQUE NOT NULL,
  lastName VARCHAR (50) UNIQUE NOT NULL,
  email VARCHAR (100) UNIQUE NOT NULL
);
