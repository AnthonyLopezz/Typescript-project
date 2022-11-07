import { Response } from "express";
import pool from "../../settings/connection/connectionDB";
import ResponseDao from "./responseDao";



class AccessDao {

    protected static async access(sqlQuery: string, params: any, res: Response): Promise<any> {
        await pool.oneOrNone(sqlQuery, params)
            .then((result) => {
                return ResponseDao.process(result, res);
            })
            .catch((err) => {
                console.log('Error at access method.', err);
                res.status(500).json({ response: 'Server Error' });

            });
    }


}

export default AccessDao;