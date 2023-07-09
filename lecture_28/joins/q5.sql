SELECT customer.cust_name,
    customer.city,
    salesman.name as salesman,
    salesman.city as s_city,
    customer.city as c_city,
    salesman.commission
from customer
    INNER JOIN salesman ON customer.salesman_id = salesman.salesman_id
where salesman.commission >.12
    AND salesman.city <> customer.city