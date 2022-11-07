"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ACCESS = void 0;
exports.SQL_ACCESS = {
    VERIFY: 'SELECT a.usernick, a.password \
    FROM usersproject a \
    WHERE a.usernick = $1 AND a.password = $2'
};
