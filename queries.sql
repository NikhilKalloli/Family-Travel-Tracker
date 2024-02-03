DROP TABLE IF EXISTS visited_countries, users;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
name VARCHAR(15) UNIQUE NOT NULL,
color VARCHAR(15)
);

CREATE TABLE visited_countries(
id SERIAL PRIMARY KEY,
country_code CHAR(2) NOT NULL,
user_id INTEGER REFERENCES users(id)
);

INSERT INTO users (name, color)
VALUES ('Nikhil', 'teal'), ('Harry', 'powderblue');

INSERT INTO visited_countries (country_code, user_id)
VALUES ('IO', 1), ('GB', 1), ('CA', 2), ('FR', 2 );


SELECT users.id, users.name, users.color, vc.country_code
FROM users
JOIN (
    SELECT user_id, country_code
    FROM visited_countries
    GROUP BY user_id, country_code
) AS vc ON users.id = vc.user_id;
