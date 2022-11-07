"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_READ_BOOK = void 0;
exports.SQL_READ_BOOK = {
    ALL: 'select b.book_id, b.book_title, b.publication_date, b.code, b.ISBN, b.publisher_id \
    from book b \
    ORDER BY b.book_title \ ',
    VERIFY: 'SELECT COUNT(b.book_id) AS quantity \
    FROM book b \
    WHERE lower(b.book_title) = lower($1)',
    LOAD: 'select b.book_id, b.book_title, b.publication_date, b.code, b.ISBN, b.publisher_id \
    from book b \
    WHERE b.book_id = $1',
    QUERY: 'SELECT b.book_id, b.book_title, d.detail_lend_id, d.description \
    FROM book b \
    INNER JOIN detail_lend d ON d.book_id = b.book_id \
    WHERE d.detail_lend_id = $1 '
};
