-- CREATE FUNCTION sales_tax(subtotal real) RETURNS real AS $$
-- BEGIN
--     RETURN subtotal * 0.06;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TABLE SALES (
--     ID INT PRIMARY KEY,
--     NAME VARCHAR(255),
--     SUBTOTAL REAL
-- );

-- INSERT INTO SALES (ID, NAME, SUBTOTAL) VALUES (1, 'MANGOS', 100.00);
-- INSERT INTO SALES (ID, NAME, SUBTOTAL) VALUES (2, 'APPLES', 200.00);
-- INSERT INTO SALES (ID, NAME, SUBTOTAL) VALUES (3, 'BANANA', 300.00);
-- INSERT INTO SALES (ID, NAME, SUBTOTAL) VALUES (4, 'LICHI', 50.00);

SELECT id, name, subtotal, sales_tax(subtotal) as taxes, (subtotal+sales_tax(subtotal)) as total FROM SALES;