import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Update_authorDao {
    
    public static async update(sqlUpdate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                return await query.result(sqlUpdate, parameter);
            })
            .then((result) => {
                console.log(result);
                res.status(402).json({ response: 'Author successfully updated.' })
            })
            .catch((err) => {
                console.log('Error at update Author: ', err);
                res.status(400).json({ response: 'Did not work at update author method!' });
            });
    }
}

export default Update_authorDao;