-- CREATE FUNCTION user_stamp() RETURNS trigger AS $user_stamp$
--     BEGIN
        
--         NEW.name := NEW.first_name || ' ' || NEW.last_name;

--         RETURN NEW;
--     END;
-- $user_stamp$ LANGUAGE plpgsql;

-- DROP FUNCTION IF EXISTS user_stamp();

-- CREATE TABLE BINGO (id INT, first_name VARCHAR(50), last_name VARCHAR(50), age INT, full_name VARCHAR(100));  

-- CREATE TRIGGER user_stamp BEFORE INSERT OR UPDATE ON BINGO
--     FOR EACH ROW EXECUTE FUNCTION user_stamp();


-- INSERT INTO bingo (id, first_name, last_name, age) VALUES (1, 'Pintu', 'Kumar', 30);

-- ALTER TABLE bingo RENAME COLUMN full_name TO name;

SELECT * FROM bingo;

-- UPDATE bingo SET first_name = 'Pintu', last_name = 'Kumar Singh' WHERE id = 1;