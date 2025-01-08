create database sampledb;

-- creating table
create table movies (Id int, movieName varchar(50), genre varchar(10), releaseYear int);

-- insert data into tables
insert into movies values(1, "The Matrix", "Sci-Fi", 1999);
insert into movies values(2, "Inception", "Sci-Fi", 2010);

show tables;

-- return all the data
select * from movies;

-- return the specific data
select movieName, genre from movies;

-- insert multiple row in table togather
insert into movies values(3,"The Dark Knight","Action",	2008), (4, "Avengers: Endgame","Action",	2019
), (5, "Bandersnatch", "sci-fi", 2012);

-- adding specific column
insert into movies(Id, movieName) values(6, "Inception - 2");

-- update
update movies
set genre="Sci-fi" 
where movieName = "Inception - 2" and Id = 6 

-- select data based condition
select * from movies 
where genre = "Sci-Fi"

-- delete
delete from movies
where Id = 5 and movieName = "Bandersnatch"

-- delete complete table
drop table movies;

-- delete database 
drop database sampledb;

show databases;

-- Task
-- create a db -> ecommerce
-- table - > products
-- schema -> id, name, description, price
-- insert 5 rows and try CRUD Operation