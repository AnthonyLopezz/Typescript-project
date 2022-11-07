"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_bookDao_1 = __importDefault(require("../../daos/book/read_bookDao"));
const read_1 = require("../../repositories/book/read");
class Read_bookController extends read_bookDao_1.default {
    getAuthor(req, res) {
        Read_bookController.get(read_1.SQL_READ_BOOK.ALL, [], res);
    }
    findById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Read_bookController.find(read_1.SQL_READ_BOOK.LOAD, parameter, res);
    }
    findByQuery(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Read_bookController.findQuery(read_1.SQL_READ_BOOK.QUERY, parameter, res);
    }
}
const read_bookController = new Read_bookController();
exports.default = read_bookController;
