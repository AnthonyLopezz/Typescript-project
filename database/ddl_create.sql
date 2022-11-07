CREATE TABLE customer (
    customer_id SERIAL NOT NULL,
    identification VARCHAR(50) NOT NULL,
    customer_name VARCHAR(200) NOT NULL,
    customer_lastname VARCHAR(200),
    address VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    CONSTRAINT PK_CUSTOMER PRIMARY KEY (customer_id)
);

ALTER TABLE customer owner to user_node;

CREATE TABLE lend (
    lend_id SERIAL NOT NULL,
    start_date DATE NOT NULL,
    description VARCHAR(200) NOT NULL,
    customer_id INT4 NOT NULL,
    CONSTRAINT PK_LENDS PRIMARY KEY (lend_id)
);

ALTER TABLE lend owner to user_node;

CREATE TABLE publisher (
    publisher_id SERIAL NOT NULL,
    publisher_name VARCHAR(200) NOT NULL,
    country VARCHAR(30) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    CONSTRAINT PK_PUBLISHER PRIMARY KEY (publisher_id)
);

ALTER TABLE publisher owner to user_node;

CREATE TABLE detail_lend (
    detail_lend_id SERIAL NOT NULL,
    lend_id INT4 NOT NULL,
    book_id INT4 NOT NULL,
    return_date DATE NOT NULL,
    days_late INT NOT NULL,
    description VARCHAR(200) NOT NULL,
    delivery_day DATE NOT NULL,
    CONSTRAINT PK_DETAILS_LENDS PRIMARY KEY (detail_lend_id)
);

ALTER TABLE detail_lend owner to user_node;

CREATE TABLE book (
    book_id SERIAL NOT NULL,
    book_title VARCHAR(200),
    publication_date DATE NOT NULL,
    code INT NOT NULL,
    ISBN CHAR(10) NOT NULL,
    publisher_id INT4 NOT NULL,
    CONSTRAINT PK_BOOK PRIMARY KEY (book_id)
);

ALTER TABLE book owner to user_node;

CREATE TABLE author (
    author_id SERIAL NOT NULL,
    author_name VARCHAR(200) NOT NULL,
    author_lastname VARCHAR(200) NOT NULL,
    nationality VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    CONSTRAINT PK_AUTHOR PRIMARY KEY (author_id)
);

ALTER TABLE author owner to user_node;

CREATE TABLE author_book (
    author_book_id SERIAL NOT NULL,
    author_id INT4 NOT NULL,
    book_id INT4 NOT NULL,
    CONSTRAINT PK_AUTHOR_BOOK PRIMARY KEY (author_book_id)
);

ALTER TABLE author_book owner to user_node;

ALTER TABLE lend
    ADD CONSTRAINT FK_LEND_CUSTOMER FOREIGN KEY (customer_id)
    REFERENCES customer (customer_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE detail_lend
    ADD CONSTRAINT FK_LEND_DETAIL_LEND FOREIGN KEY (lend_id)
    REFERENCES lend (lend_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE detail_lend
    ADD CONSTRAINT FK_BOOK_DETAIL_LEND FOREIGN KEY (book_id)
    REFERENCES book (book_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE book
    ADD CONSTRAINT FK_PUBLISHER_BOOK FOREIGN KEY (publisher_id)
    REFERENCES publisher (publisher_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE author_book
    ADD CONSTRAINT FK_AUTHOR_AUTHOR_BOOK FOREIGN KEY (author_id)
    REFERENCES author (author_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE author_book
    ADD CONSTRAINT FK_BOOK_AUTHOR_BOOK FOREIGN KEY (book_id)
    REFERENCES book (book_id)
    ON DELETE RESTRICT ON UPDATE CASCADE;

    CREATE TABLE usersproject (
	user_id SERIAL NOT NULL,
	usernick VARCHAR(200) NOT NULL,
	password VARCHAR(200) NOT NULL,
	CONSTRAINT PK_USERSPROJECT PRIMARY KEY (user_id)
);

ALTER TABLE usersproject owner to user_node;