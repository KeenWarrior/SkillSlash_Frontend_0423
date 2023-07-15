-- CREATE TABLE ORDERS (
--     id INT,
--     order_status VARCHAR(50),
--     customer_id INT,
--     order_amount INT
-- );

-- INSERT INTO orders (id, order_status, customer_id, order_amount) VALUES (1, 'NEW', 1, 1000);
-- INSERT INTO orders (id, order_status, customer_id, order_amount) VALUES (2, 'NEW', 2, 2000);
-- INSERT INTO orders (id, order_status, customer_id, order_amount) VALUES (3, 'NEW', 3, 3000);
-- INSERT INTO orders (id, order_status, customer_id, order_amount) VALUES (4, 'NEW', 1, 4000);


SELECT users.name, users.age, orders.order_amount, orders.id as orders_id, users.id as users_id FROM orders FULL OUTER JOIN users ON orders.customer_id = users.id;