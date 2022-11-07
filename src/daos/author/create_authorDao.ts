import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Create_authorDao {
    public static async create(sqlVerify: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                const data = await query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return await query.one(sqlCreate, parameter);
                } else {
                    return { authorId: 0 };
                }
            })
            .then((result) => {
                if (result.authorId != 0) {
                    res.status(200).json({ response: 'Author successfully created.', newCod: result.authorId })
                } else {
                    res.status(402).json({ response: 'Author unsuccessfully created. Already exists.' })
                }
            })
            .catch((err) => {
                console.log('Error at create author: ', err);
                res.status(400).json({ response: 'Did not work at create author method!' });
            });
    }
}

export default Create_authorDao;