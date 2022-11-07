export const SQL_READ_AUTHORBOOK = {
    ALL: 'select a.author_book_id, a.author_id, a.book_id \
    from author_book a \ ',

    VERIFY: 'SELECT COUNT(a.author_book_id) AS quantity \
    FROM author_book a \
    WHERE a.author_id = $1',

    LOAD: 'select a.author_book_id, a.author_id, a.book_id \
    from author_book a \
    WHERE a.author_book_id = $1',
}