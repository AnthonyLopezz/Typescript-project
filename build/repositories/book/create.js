"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_BOOK = void 0;
exports.SQL_CREATE_BOOK = {
    CREATE: 'INSERT INTO book (book_title, publication_date, code, ISBN, publisher_id) VALUES ($1, $2, $3, $4, $5) RETURNING book_id'
};
