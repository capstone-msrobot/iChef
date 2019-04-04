-- create database if not exists userDB;

-- use userDB;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

create table if not exists users (
    id int not null auto_increment primary key,
    email varchar(128) not null UNIQUE,
    userName varchar(255) not null UNIQUE,
    passHash binary(60) not null,
    firstName varchar(64) not null,
    lastName varchar(128) not null,
    photoURL varchar(2083) not null,
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

create table if not exists signin (
    pKey int not null auto_increment primary key,
    id int not null,
    signingTimeDate datetime not null,
    ipAddress varchar(128) not null UNIQUE
);

create table if not exists recipes (
    id int not null auto_increment primary key,
    foodName varchar(128) not null,
    foodType varchar(128) not null,
    cookTime int not null,
    author int not null,
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

-- create table if not exists channels (
--     id int not null auto_increment primary key,
--     nameString varchar(128) not null UNIQUE,
--     descriptionString varchar(2083) not null,
--     privateBool boolean,
--     createdAt datetime not null,
--     creatorID int not null,      
--     editedAt datetime
-- );

-- create table if not exists channels_members (
--     id int not null auto_increment primary key,
--     channelID int not null,
--     userID int not null
-- );

-- -- create general row 
-- insert into channels (nameString, descriptionString, privateBool, createdAt, creatorID, editedAt)
--     values ('general', 'this is a general channel', false, localtime, -1, localtime);

-- create table if not exists messages (
--     id int not null auto_increment UNIQUE primary key,
--     channelID int not null,
--     body varchar(128) not null,
--     createdAt datetime not null,
--     creatorID int not null,
--     editedAt datetime
-- );

