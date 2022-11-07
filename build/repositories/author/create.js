"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CREATE_AUTHOR = void 0;
exports.SQL_CREATE_AUTHOR = {
    CREATE: 'INSERT INTO author (author_name, author_lastname, nationality, description) VALUES ($1, $2, $3, $4) RETURNING author_id'
};
