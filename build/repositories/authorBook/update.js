"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_AUTHORBOOK = void 0;
exports.SQL_UPDATE_AUTHORBOOK = {
    UPDATE: 'UPDATE author_book SET author_book_id = $1, author_id = $2, book_id = $3 \
    WHERE author_book_id = $1',
};
