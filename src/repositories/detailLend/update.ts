export const SQL_UPDATE_DETAILS = {
    UPDATE: 'UPDATE detail_lend SET detail_lend_id = $1, lend_id = $2, book_id = $3, return_date = $4, days_late = $5, description = $6, delivery_day = $7 \
    WHERE detail_lend_id = $1'
}