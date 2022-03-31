INSERT INTO Department (name)
VALUES
('Finance'),
('Engineering'),
('Sales'),
('Human Resources');

INSERT INTO Role (title, department_id, salary)
VALUES
('Accountant', 1, 999000),
('Recruiter', 2, 0101010),
('Software Engineer', 3, 45445455),
('General Manager', 4, 67677676),
('Business Analyst', 1, 2122121),
('Digital Marketing', 3, 09090909);

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES
('Jason', 'Kim', NULL, NULL),
('Jack', 'Johnson', NULL, NULL),
('Ted', 'Rain', NULL, NULL),
('Bill', 'Walberg', NULL, NULL),
('Ronald', 'Grant', NULL, NULL),
('Dwayne', 'Show', NULL, NULL);