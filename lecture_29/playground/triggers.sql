-- CREATE FUNCTION user_stamp() RETURNS trigger AS $user_stamp$
--     BEGIN
--         -- Check that empname and salary are given
--         IF NEW.name IS NULL THEN
--             RAISE EXCEPTION 'name cannot be null';
--         END IF;

--         RETURN NEW;
--     END;
-- $user_stamp$ LANGUAGE plpgsql;

-- CREATE TRIGGER user_stamp BEFORE INSERT OR UPDATE ON USERS
--     FOR EACH ROW EXECUTE FUNCTION user_stamp();

-- INSERT INTO USERS (id, name, age) VALUES (6, 'Pintu', 30);

-- SELECT * FROM users;

UPDATE users SET name = NULL WHERE id = 6;
