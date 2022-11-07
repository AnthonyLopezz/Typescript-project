import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Create_authorBookDao {
    public static async create(sqlVerify: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                const data = await query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return await query.one(sqlCreate, parameter);
                } else {
                    return { authorBookId: 0 };
                }
            })
            .then((result) => {
                if (result.authorBookId != 0) {
                    res.status(200).json({ response: 'AuthorBook successfully created.', newCod: result.authorBookId })
                } else {
                    res.status(402).json({ response: 'AuthorBook unsuccessfully created. Already exists.' })
                }
            })
            .catch((err) => {
                console.log('Error at create author book: ', err);
                res.status(400).json({ response: 'Did not work at create author book method!' });
            });
    }
}

export default Create_authorBookDao;