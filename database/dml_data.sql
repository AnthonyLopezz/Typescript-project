INSERT INTO author (author_name, author_lastname, nationality, description) VALUES ('Gabriel', 'Gatcia', 'Colombiano', 'un escritor y periodista colombiano. Reconocido principalmente por sus novelas y cuentos'), 
('Jorge', 'Isaacs', 'Colombiano', ' novelista, escritor y poeta colombiano del género romántico.'),
('Hector', 'Abad', 'Colombiano', 'Un escritor y periodista colombiano');

INSERT INTO publisher (publisher_name, country, phone) VALUES ('Alfaomega', 'Colombia', '7777777'), 
('Babel Libros', 'Colombia', '7777777'), ('Calixta Editores', 'Colombia', '7777777');

INSERT INTO book (book_title, publication_date, code, isbn, publisher_id) VALUES ('Doce cuentos Pregrinos', '1992-08-01', 1, 97979797, 1),
('María', '1867-01-01', 2, 97979797, 2),('El olvido que seremos', '2006-01-01', 3, 97979797, 3);

INSERT INTO customer (identification, customer_name, customer_lastname, address, phone) VALUES 
('1007673204', 'Anthony', 'López', 'Calle 11B #24-09', '3194843592'), 
('1000000000', 'Mikasa', 'Ackerman', 'Calle 11B #24-09', '3202803594');

INSERT INTO lend (start_date, description, customer_id) VALUES ('2022-05-19', 'Préstamo libro El olvido que seremos de Hector Abad.', 1),
('2022-05-19', 'Préstamo libro María de Jorge Isaacs.', 2);

INSERT INTO detail_lend (lend_id, book_id, return_date, days_late, description, delivery_day)
VALUES (1, 1, '2022-05-31', 0, 'Préstamo Libro por 12 días.', '2022-05-31'),
(2, 2, '2022-05-31', 0, 'Prestamo libro por 12 días.', '2022-05-31');

INSERT INTO author_book (author_id, book_id) VALUES (1, 1), (2, 2);

INSERT INTO usersproject (usernick, password) VALUES ('Ant', 'pass');