export const SQL_CREATE_CUSTOMER = {
    CREATE: 'INSERT INTO customer (identification, customer_name, customer_lastname, address, phone) VALUES ($1, $2, $3, $4, $5) RETURNING customer_id'
}