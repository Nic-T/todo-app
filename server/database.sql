CREATE DATABASE todo;

CREATE TABLE todo(

    todo_id SERIAL PRIMARY KEY,
    description text,
    title varchar(150) NOT NULL
);