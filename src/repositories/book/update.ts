export const SQL_UPDATE_BOOK = {
    UPDATE: 'UPDATE book SET book_id = $1, book_title = $2, publication_date = $3, code = $4, ISBN = $5, publisher_id = $6 \
    WHERE book_id = $1',
}