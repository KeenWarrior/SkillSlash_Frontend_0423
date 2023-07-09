-- From the following tables write a SQL query to display the customer name, customer city, grade, salesman, salesman city. The results should be sorted by ascending customer_id.  

SELECT customer.cust_name,
    customer.grade,
    salesman.name as salesman,
    salesman.city as s_city,
    customer.city as c_city,
from customer
    INNER JOIN salesman ON customer.salesman_id = salesman.salesman_id
ORDER BY customer.customer_id ASC;