CREATE TABLE users (
   user_id VARCHAR(50) NOT NULL,
   username VARCHAR(50) UNIQUE NOT NULL,
   created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (user_id)
);

INSERT INTO users (user_id, username)
VALUES('8de9ec2b-592b-42cf-b60a-dc0bbe56a4cb', 'admin');