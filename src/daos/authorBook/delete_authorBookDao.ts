import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Delete_authorBookDao {
    
    protected static async delete(sqlDelete: string, params: any, res: Response): Promise<any> {
        await pool.result(sqlDelete, params)
            .then((result) => {

                console.log(result);
                return res.status(200).json({ StatusCode: result.rowCount + ": Successfully deleted." });

            })
            .catch((err) => {

                console.log('Error at deleteById method.', err);
                res.status(400).json({ response: 'Error at delete by id.' });

            });
    }
}

export default Delete_authorBookDao;