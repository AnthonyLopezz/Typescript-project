"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Validate {
    delToken(req, res, next) {
        console.log(req.headers);
        if (!req.headers.authorization) {
            res.status(401).json({ msg: 'Invalid Aunthorization' });
        }
        else {
            try {
                const token = req.headers.authorization.split(' ')[1];
                const data = jsonwebtoken_1.default.verify(token, 'EncryptedPassword');
                req.body.usefullData = data;
                next();
            }
            catch (error) {
                res.status(401).json({ msg: 'Invalid Token.' });
            }
        }
    }
}
const validate = new Validate();
exports.default = validate;
