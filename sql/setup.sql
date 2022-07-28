-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists animals;

CREATE table animals (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    gender VARCHAR,
    voice VARCHAR
);

INSERT INTO animals (name, type) VALUES
('Alex', 'Lion', 'Male', 'Ben Stiller'),
('Marty', 'Zebra', 'Male', 'Chris Rock'),
('Melman', 'Giraffe', 'Male', 'David Schwimmer'),
('Gloria', 'Hipppopotamus', 'Female', 'Jada Pinkett Smith');