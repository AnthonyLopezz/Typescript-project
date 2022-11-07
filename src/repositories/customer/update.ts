export const SQL_UPDATE_CUSTOMER = {
    UPDATE: 'UPDATE customer SET customer_id = $1, identification = $2, customer_name = $3, customer_lastname = $4, address = $5, phone = $6 \
    WHERE customer_id = $1',
}