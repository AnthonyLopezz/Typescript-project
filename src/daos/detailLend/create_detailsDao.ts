import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Create_detailsDao {
    public static async create(sqlVerify: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                const data = await query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return await query.one(sqlCreate, parameter);
                } else {
                    return { detailLendId: 0 };
                }
            })
            .then((result) => {
                if (result.detailLendId != 0) {
                    res.status(200).json({ response: 'Details successfully created.', newCod: result.detailLendId })
                } else {
                    res.status(402).json({ response: 'Details unsuccessfully created. Already exists.' })
                }
            })
            .catch((err) => {
                console.log('Error at create details: ', err);
                res.status(400).json({ response: 'Did not work at create details method!' });
            });
    }
}

export default Create_detailsDao;