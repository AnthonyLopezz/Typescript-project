import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Create_lendDao {
    public static async create(sqlVerify: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                const data = await query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return await query.one(sqlCreate, parameter);
                } else {
                    return { lendId: 0 };
                }
            })
            .then((result) => {
                if (result.lendId != 0) {
                    res.status(200).json({ response: 'Lend successfully created.', newCod: result.lendId })
                } else {
                    res.status(402).json({ response: 'Lend unsuccessfully created. Already exists.' })
                }
            })
            .catch((err) => {
                console.log('Error at create lend: ', err);
                res.status(400).json({ response: 'Did not work at create lend method!' });
            });
    }
}

export default Create_lendDao;