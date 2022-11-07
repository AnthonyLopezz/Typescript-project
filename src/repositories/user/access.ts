export const SQL_ACCESS = {
    VERIFY: 'SELECT a.usernick, a.password \
    FROM usersproject a \
    WHERE a.usernick = $1 AND a.password = $2'
}