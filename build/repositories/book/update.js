"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_BOOK = void 0;
exports.SQL_UPDATE_BOOK = {
    UPDATE: 'UPDATE book SET book_id = $1, book_title = $2, publication_date = $3, code = $4, ISBN = $5, publisher_id = $6 \
    WHERE book_id = $1',
};
