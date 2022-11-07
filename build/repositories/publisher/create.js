"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_PUBLISHER = void 0;
exports.SQL_CREATE_PUBLISHER = {
    CREATE: 'INSERT INTO publisher (publisher_name, country, phone) VALUES ($1, $2, $3) RETURNING publisher_id'
};
