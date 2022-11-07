export const SQL_CREATE_DETAILS = {
    CREATE: 'INSERT INTO detail_lend (lend_id, book_id, return_date, days_late, description, delivery_day) \
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING detail_lend_id'
}
