import { Response } from "express";
import pool from "../../settings/connection/connectionDB";

class Create_bookDao {
    public static async create(sqlVerify: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        await pool
            .task(async query => {
                const data = await query.one(sqlVerify, parameter);
                if (data.quantity == 0) {
                    return await query.one(sqlCreate, parameter);
                } else {
                    return { bookId: 0 };
                }
            })
            .then((result) => {
                if (result.bookId != 0) {
                    res.status(200).json({ response: 'Book successfully created.', newCod: result.bookId })
                } else {
                    res.status(402).json({ response: 'Book unsuccessfully created. Already exists' })
                }
            })
            .catch((err) => {
                console.log('Error at create book: ', err);
                res.status(400).json({ response: 'Did not work at create book method!' });
            });
    }
}

export default Create_bookDao;