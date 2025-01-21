create database transaction;

use transaction;

create table employees (
empId int primary key,
name varchar(40),
age int,
city varchar(40),
income int
)

insert into employees values(1, "alina", 20, "pune", 898090)

select * from employees;

create table orders(
orderId int not null primary key,
productName varchar(40),
orderNumber int, 
orderDate datetime
)

-- session start
-- commit
start transaction;
insert into orders values(1, "Air fryer", 7878, "2025-01-21")

select * from orders;

-- to commit/complete the transaction as success
commit;

-- rollback
start transaction;
delete from employees
select * from employees;

-- rollback-> reversed
rollback;

-- alternate
select * from orders;
start transaction

-- operation
insert into orders values(2, "TV", 8990, "2025-01-22")
select * from orders;
rollback;

-- savepoint (checkpoint)
start transaction

insert into orders values(3, "Fridge", 8977, "2025-01-24")
savepoint insertsavepoint_1

insert into orders values(4, "Washing Machine", 9879, "2025-01-24")
savepoint insertsavepoint_2

-- information till insertsavepoint_1 will come, not after that
rollback to insertsavepoint_1

-- delete savepoint
release savepoint insertsavepoint_1

commit;









