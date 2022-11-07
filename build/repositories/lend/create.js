"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_LEND = void 0;
exports.SQL_CREATE_LEND = {
    CREATE: 'INSERT INTO lend (start_Date, description, customer_id) VALUES ($1, $2, $3) RETURNING lend_id'
};
