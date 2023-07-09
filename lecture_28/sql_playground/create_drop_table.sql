
-- This will show error if table already exists
CREATE TABLE USERS (
    ID INT PRIMARY KEY,
    NAME VARCHAR(255) NOT NULL,
    EMAIL VARCHAR(255) NOT NULL,
    AGE INT DEFAULT 0
);


-- CREATE TABLE IF NOT EXISTS

-- CREATE OR REPLACE TABLE

-- DROP TABLE IF EXISTS USERS;

-- DROP TABLE USERS; This will show error if table does not exist