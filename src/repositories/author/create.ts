export const SQL_CREATE_AUTHOR = {
    CREATE: 'INSERT INTO author (author_name, author_lastname, nationality, description) VALUES ($1, $2, $3, $4) RETURNING author_id'
}