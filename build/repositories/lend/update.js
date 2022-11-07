"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_LEND = void 0;
exports.SQL_UPDATE_LEND = {
    UPDATE: 'UPDATE lend SET lend_id = $1, start_date = $2, description = $3, customer_id= $4 \
    WHERE lend_id = $1',
};
