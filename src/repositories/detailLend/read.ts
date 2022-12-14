export const SQL_READ_DETAILS = {
    ALL: 'select a.detail_lend_id, a.lend_id, book_id, a.return_date, a.days_late, a.description, a.delivery_day \
    from detail_lend a \ ',

    VERIFY: 'SELECT COUNT(a.detail_lend_id) AS quantity \
    FROM detail_lend a \
    WHERE a.lend_id = $1',

    LOAD: 'select a.detail_lend_id, a.lend_id, book_id, a.return_date, a.days_late, a.description, a.delivery_day \
    from detail_lend a \
    WHERE a.detail_lend_id = $1',
}