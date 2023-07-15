-- CREATE FUNCTION product(x int, y int) RETURNS int AS $$
-- DECLARE
--     prod int;
-- BEGIN
--     prod := x * y;
--     RETURN prod;
-- END;
-- $$ LANGUAGE plpgsql;

SELECT product(5, 10);

-- DROP PROCEDURE IF EXISTS sum_n_product;
