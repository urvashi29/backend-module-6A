use sampledb;

show tables;

select * from users;

-- get the record where name is null
select * from users where name = null

-- we can't select the record with value = null
select * from users where name is null

-- select all the records where name is not null
select * from users where name is not null

-- select multiple records 
select * from users where Id in (2, 6, 7)

-- in between
select * from users where Id between 2 and 6

show tables;

create table customers (
customerId int primary key,
name varchar(50),
city varchar(50)
)

insert into customers values(1, "alex", "mumbai"), (2, "alina", "mumbai"), (3, "alaya", "pune")

select * from customers

create table orders (
orderId int primary key,
orderNumber int,
customerId int,
foreign key (customerId) references customers(customerId)
)

select * from orders;

insert into orders values(1, 87879, 1), (2, 798989, 1), (3, 76787, 2)

select * from orders where customerId = 1;

-- you can't add record into orders table for the customer that doesn't exist
insert into orders values(5, 898099, 6)

-- we can't delete this record becaus customerId-1 is associated with order table
delete from customers where customerId = 1;

-- to resolve this
delete from orders where customerId = 1;
delete from customers where customerId = 1;

drop table orders
drop table customers

show tables;

-- to resolve this: alternate
create table customers (
customerId int primary key,
name varchar(50),
city varchar(50)
)

insert into customers values(1, "alex", "mumbai"), (2, "alina", "mumbai"), (3, "alaya", "pune")

create table orders (
orderId int primary key,
orderNumber int,
customerId int,
foreign key (customerId) references customers(customerId) on delete cascade
)

insert into orders values(1, 87879, 1), (2, 798989, 1), (3, 76787, 2)

select * from orders;
select * from customers;

delete from customers where customerId = 1;

use sample;

show tables;

select * from customers;
select * from products;
select * from orders;
select * from employees;
select * from categories;

-- inner join (alias- optional)
-- syntax: select * from table1 alias inner join table2 alias on table1.id = table2.id

select ords.order_id, cts.first_name, cts.customer_id from customers cts inner join orders ords
on cts.customer_id = ords.customer_id

select * from categories;
select * from products;

select product_name, ctgs.category_id  from categories ctgs inner join products pds
on ctgs.category_id = pds.category_id

-- left join
-- syntax: select * from table1 alias left join table2 alias on table1.id = table2.id
select ords.order_id, cts.first_name, cts.customer_id from customers cts left join orders ords
on cts.customer_id = ords.customer_id

-- right join
-- syntax: select * from table1 alias right join table2 alias on table1.id = table2.id
select ords.order_id, cts.first_name, cts.customer_id from customers cts right join orders ords
on cts.customer_id = ords.customer_id

-- full join: left join union right join
select ords.order_id, cts.first_name, cts.customer_id from customers cts left join orders ords
on cts.customer_id = ords.customer_id
union
select ords.order_id, cts.first_name, cts.customer_id from customers cts right join orders ords
on cts.customer_id = ords.customer_id

-- in my sql full join -> select ords.order_id, cts.first_name, cts.customer_id from customers cts full outer join orders ords
-- on cts.customer_id = ords.customer_id

-- union
select first_name from customers
union 
select order_id from orders;

-- candidate key
-- select name from users where email="" and phone=""


