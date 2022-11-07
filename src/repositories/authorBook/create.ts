export const SQL_CREATE_AUTHORBOOK = {
    CREATE: 'INSERT INTO author_book (author_id, book_id) VALUES ($1, $2) RETURNING author_book_id'
}