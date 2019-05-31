create database if not exists recipeDB;

use recipeDB;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

-- create table if not exists contacts (
--     id int not null auto_increment primary key,
--     email varchar(128) not null,
--     first_name varchar(64) not null,
--     last_name varchar(128) not null
-- );

create table if not exists users (
    id int not null auto_increment primary key,
    email varchar(128) not null UNIQUE,
    userName varchar(255) not null UNIQUE,
    passwordString varchar(255) not null,
    firstName varchar(128) not null,
    lastName varchar(128) not null,
);

create table if not exists user_allergies (
    id int not null auto_increment primary key,
    userID int not null,
    allergy varchar(255)not null UNIQUE,
);

create table if not exists user_equipment (
    id int not null auto_increment primary key,
    userID int not null,
    equipment varchar(255)not null UNIQUE,
);

-- -- create table if not exists signin (
-- --     pKey int not null auto_increment primary key,
-- --     id int not null,
-- --     signingTimeDate datetime not null,
-- --     ipAddress varchar(128) not null UNIQUE
-- -- );

create table if not exists recipes (
    id int not null auto_increment primary key,
    foodName varchar(128) not null,
    foodType varchar(128) not null,
    cookTime int not null,
    userID int not null,
);

create table if not exists recipe_directions (
    id int not null auto_increment primary key,
    recipeID int not null,
    step varchar(1020) not null,
    order int not null UNIQUE,
);

create table if not exists recipe_ingredients (
    id int not null auto_increment primary key,
    recipeID int not null,
    ingredient varchar(255)not null UNIQUE,
);

create table if not exists recipe_equipment (
    id int not null auto_increment primary key,
    recipeID int not null,
    equipment varchar(255)not null UNIQUE,
);

