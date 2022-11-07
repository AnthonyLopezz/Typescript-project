import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Update_bookDao {
    
    public static async update(sqlUpdate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                return await query.result(sqlUpdate, parameter);
            })
            .then((result) => {
                console.log(result);
                res.status(402).json({ response: 'Book successfully updated.' })
            })
            .catch((err) => {
                console.log('Error at update book: ', err);
                res.status(400).json({ response: 'Did not work at update book method!' });
            });
    }
}

export default Update_bookDao;