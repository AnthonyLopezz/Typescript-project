"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_READ_PUBLISHER = void 0;
exports.SQL_READ_PUBLISHER = {
    ALL: 'select a.publisher_id, a.publisher_name, a.country, a.phone \
    from publisher a \
    ORDER BY a.publisher_name \ ',
    VERIFY: 'SELECT COUNT(a.publisher_id) AS quantity \
    FROM publisher a \
    WHERE lower(a.publisher_name) = lower($2)',
    LOAD: 'select a.publisher_id, a.publisher_name, a.country, a.phone \
    from publisher a \
    WHERE a.publisher_id = $1',
    QUERY: 'SELECT p.publisher_name, b.book_id, b.book_title \
    FROM publisher p \
    INNER JOIN book b ON p.publisher_id = b.publisher_id \
    WHERE b.book_id = $1'
};
