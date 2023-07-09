 SELECT SUM(purch_amt) from orders;


--  3. From the following table, write a SQL query that counts the number of unique salespeople. Return number of salespeople.  

 SELECT COUNT(DISTINCT(salesman_id)) FROM orders;


-- From the following table, write a SQL query to count the number of customers. Return number of customers.  
SELECT COUNT(*) FROM customer;


SELECT COUNT(*) FROM customer WHERE grade IS NOT NULL;

SELECT MIN(purch_amt) FROM orders;

SELECT MAX(GRADE), CITY FROM CUSTOMER GROUP BY CITY;


SELECT MAX(purch_amt), customer_id FROM CUSTOMER GROUP BY customer_id;