import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Create_publisherDao {
    public static async create(sqlVerify: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                const data = await query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return await query.one(sqlCreate, parameter);
                } else {
                    return { publisherId: 0 };
                }
            })
            .then((result) => {
                if (result.publisherId != 0) {
                    res.status(200).json({ response: 'Publisher successfully created.', newCod: result.publisherId })
                } else {
                    res.status(402).json({ response: 'Publisher unsuccessfully created. Already exists.' })
                }
            })
            .catch((err) => {
                console.log('Error at create publisher: ', err);
                res.status(400).json({ response: 'Did not work at create publisher method!' });
            });
    }
}

export default Create_publisherDao;