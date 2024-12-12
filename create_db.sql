CREATE DATABASE AssignmentTracker;
USE AssignmentTracker;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- Insert sample users into the users table
INSERT INTO users (first_name, last_name, email)
VALUES 
('Alice', 'Johnson', 'alice.johnson@example.com'),
('Bob', 'Smith', 'bob.smith@example.com'),
('Charlie', 'Brown', 'charlie.brown@example.com'),
('Dana', 'White', 'dana.white@example.com'),
('Eve', 'Adams', 'eve.adams@example.com');

SELECT * FROM users;

-- Create assignments table
CREATE TABLE assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    due_date DATE NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


INSERT INTO assignments (title, description, due_date, user_id)
VALUES
('Math Homework', 'Complete exercises 1 to 10 from chapter 3.', '2024-12-15', 1),
('Science Project', 'Prepare a presentation on renewable energy.', '2024-12-20', 2),
('History Essay', 'Write an essay about the Industrial Revolution.', '2024-12-18', 3),
('Art Assignment', 'Create a painting inspired by nature.', '2024-12-22', 4),
('Computer Lab Report', 'Analyze the results from the recent lab experiment.', '2024-12-14', 5);

SELECT * FROM assignments;

SELECT user, host FROM mysql.user;
CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'mypassword';
GRANT ALL PRIVILEGES ON AssignmentTracker.* TO 'myuser'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

SHOW GRANTS FOR 'myuser'@'localhost';



SHOW TABLES;