"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_READ_AUTHOR = void 0;
exports.SQL_READ_AUTHOR = {
    ALL: 'select a.author_id, a.author_name, a.author_lastname, a.nationality, a.description \
    from author a \
    ORDER BY a.author_name \ ',
    VERIFY: 'SELECT COUNT(a.author_id) AS quantity \
    FROM author a \
    WHERE lower(a.author_name) = lower($1)',
    LOAD: 'select a.author_id, a.author_name, a.author_lastname, a.nationality, a.description \
    from author a \
    WHERE a.author_id = $1',
};
