CREATE DATABASE shadowhub;
USE shadowhub;
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(50),
  name VARCHAR(100)
);
INSERT INTO categories (user_id, name) VALUES ('user_x_12345', 'kids');
INSERT INTO categories (user_id, name) VALUES ('user_x_12345', 'animals');
INSERT INTO categories (user_id, name) VALUES ('user_x_12345', 'extreme');