"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_READ_CUSTOMER = void 0;
exports.SQL_READ_CUSTOMER = {
    ALL: 'select a.customer_id, a.identification, a.customer_name, a.customer_lastname, a.address, a.phone \
    from customer a \
    ORDER BY a.customer_name \ ',
    VERIFY: 'SELECT COUNT(a.customer_id) AS quantity \
    FROM customer a \
    WHERE lower(a.customer_name) = lower($2)',
    LOAD: 'select a.customer_id, a.identification, a.customer_name, a.customer_lastname, a.address, a.phone \
    from customer a \
    WHERE a.customer_id = $1',
    QUERY: 'SELECT c.customer_name, c.customer_lastname, l.lend_id, l.description \
    FROM customer c \
    INNER JOIN lend l ON c.customer_id = l.customer_id \
    WHERE l.lend_id = $1'
};
