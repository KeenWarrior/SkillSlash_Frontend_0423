-- CREATE OR REPLACE PROCEDURE sum_n_product(x int, y int) AS $$
-- DECLARE
--     sum int;
--     prod int;
-- BEGIN
--     sum := x + y;
--     prod := x * y;
--     RAISE NOTICE 'Sum = %, Product = %', sum, prod;
-- END;
-- $$ LANGUAGE plpgsql;

CALL sum_n_product(5, 10);

-- DROP PROCEDURE IF EXISTS sum_n_product;
