"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_AUTHOR = void 0;
exports.SQL_UPDATE_AUTHOR = {
    UPDATE: 'UPDATE author SET author_id = $1, author_name = $2, author_lastname = $3, nationality = $4, description = $5 \
    WHERE author_id = $1',
};
