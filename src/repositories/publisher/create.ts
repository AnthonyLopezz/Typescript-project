export const SQL_CREATE_PUBLISHER = {
    CREATE: 'INSERT INTO publisher (publisher_name, country, phone) VALUES ($1, $2, $3) RETURNING publisher_id'
}