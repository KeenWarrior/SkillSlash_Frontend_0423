--  From the following tables write a SQL query to find the salesperson and customer who reside in the same city. Return Salesman, cust_name and city.

SELECT customer.cust_name, salesman.salesman_id, salesman.name from customer INNER JOIN salesman ON customer.city = salesman.city;