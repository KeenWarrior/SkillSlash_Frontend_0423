-- CREATE TABLE your_table_name (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(50),
--   age INTEGER
-- );

-- INSERT INTO your_table_name (name, age) VALUES
--   ('John Doe', 30),
--   ('Jane Smith', 25),
--   ('Alice Johnson', 40);

-- CREATE FUNCTION calculate_tax(salary numeric) RETURNS numeric AS
-- $$
-- DECLARE
--   tax numeric;
-- BEGIN
--   tax := salary * 0.2; -- Assume a 20% tax rate
--   RETURN tax;
-- END;
-- $$
-- LANGUAGE plpgsql;


-- SELECT calculate_tax(1000) AS tax;

-- CREATE TABLE IF NOT EXISTS users (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(50),
--   age INTEGER
-- );

-- INSERT INTO users (name, age) VALUES
--   ('John Doe', 30),
--   ('Jane Smith', 25),
--   ('Alice Johnson', 40);

-- UPDATE users SET age = 32 WHERE id = 1;

-- SELECT * FROM users ORDER BY id ASC;

-- SHOW TABLES;

-- SELECT users FROM anuj.tables WHERE table_schema = 'users' AND table_type = 'BASE TABLE';

-- SELECT id, id AS count, name FROM users WHERE age > 30 OR age<20;

-- CREATE TABLE places (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR,
--   location GEOMETRY(Point, 4326) -- A point geometry with SRID 4326 (WGS 84)
-- );

CREATE EXTENSION postgis;
