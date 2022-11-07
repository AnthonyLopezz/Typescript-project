"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_authorBookDao_1 = __importDefault(require("../../daos/authorBook/read_authorBookDao"));
const read_1 = require("../../repositories/authorBook/read");
class Read_authorBookController extends read_authorBookDao_1.default {
    getAuthorBook(req, res) {
        Read_authorBookController.get(read_1.SQL_READ_AUTHORBOOK.ALL, [], res);
    }
    findById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Read_authorBookController.find(read_1.SQL_READ_AUTHORBOOK.LOAD, parameter, res);
    }
}
const read_authorBookController = new Read_authorBookController();
exports.default = read_authorBookController;
