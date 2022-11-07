"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_AUTHORBOOK = void 0;
exports.SQL_CREATE_AUTHORBOOK = {
    CREATE: 'INSERT INTO author_book (author_id, book_id) VALUES ($1, $2) RETURNING author_book_id'
};
