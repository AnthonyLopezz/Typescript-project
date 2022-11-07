"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_PUBLISHER = void 0;
exports.SQL_UPDATE_PUBLISHER = {
    UPDATE: 'UPDATE publisher SET publisher_id = $1, publisher_name = $2, country = $3, phone = $4 \
    WHERE publisher_id = $1',
};
