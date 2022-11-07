export const SQL_READ_LEND = {
    ALL: 'select a.lend_id, a.start_date, a.description, a.customer_id \
    from lend a \ ',

    VERIFY: 'SELECT COUNT(a.lend_id) AS quantity \
    FROM lend a \
    WHERE lower(a.description) = lower($2)',

    LOAD: 'select a.lend_id, a.start_date, a.description, a.customer_id \
    from lend a \
    WHERE a.lend_id = $1',
}