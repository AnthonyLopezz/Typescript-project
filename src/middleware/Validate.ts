import Jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

class Validate {
    public delToken(req: Request, res: Response, next: NextFunction): any {
        console.log(req.headers);
        if (!req.headers.authorization) {
            res.status(401).json({ msg: 'Invalid Aunthorization' });
        } else {
            try {
                const token = req.headers.authorization.split(' ')[1] as string;
                const data = Jwt.verify(token, 'EncryptedPassword');
                req.body.usefullData = data;
                next();
            } catch (error) {
                res.status(401).json({msg: 'Invalid Token.'});
            }

        }
    }
}

const validate = new Validate();
export default validate;