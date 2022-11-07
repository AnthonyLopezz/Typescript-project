import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Update_customerDao {
    
    public static async update(sqlUpdate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                return await query.result(sqlUpdate, parameter);
            })
            .then((result) => {
                console.log(result);
                res.status(402).json({ response: 'Customer successfully updated.' })
            })
            .catch((err) => {
                console.log('Error at update customer: ', err);
                res.status(400).json({ response: 'Did not work at update customer method!' });
            });
    }
}

export default Update_customerDao;