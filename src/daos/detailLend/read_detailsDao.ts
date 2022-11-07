import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Read_detailsDao {
    protected static async find(sqlQuery: string, params: any, res: Response): Promise<any> {
        await pool.one(sqlQuery, params)
            .then((result) => {

                console.log(result);
                return res.status(200).json({ response: result });

            })
            .catch((err) => {

                console.log('Error at findById method.', err);
                res.status(400).json({ response: 'Error at find by id.' });

            });
    }

    public static async get(sqlQuery: string, parameter: any, res: Response): Promise<any> {

        pool.result(sqlQuery, parameter)
            .then((result) => {
                res.status(200).json(result.rows);
            })
            .catch((err) => {
                console.log('Error at get details: ', err);
                res.status(400).json({ response: 'Did not work at get details!' })
            });

    }
}

export default Read_detailsDao;