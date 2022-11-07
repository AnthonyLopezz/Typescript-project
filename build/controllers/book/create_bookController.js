"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_bookDao_1 = __importDefault(require("../../daos/book/create_bookDao"));
const create_1 = require("../../repositories/book/create");
const read_1 = require("../../repositories/book/read");
class Create_bookController extends create_bookDao_1.default {
    create(req, res) {
        const title = req.body.bookTitle;
        const publicationDate = req.body.publicationDate;
        const code = req.body.code;
        const isbn = req.body.isbn;
        const publisherId = req.body.publisherId;
        const parameters = [title, publicationDate, code, isbn, publisherId];
        Create_bookController.create(read_1.SQL_READ_BOOK.VERIFY, create_1.SQL_CREATE_BOOK.CREATE, parameters, res);
    }
}
const create_bookController = new Create_bookController();
exports.default = create_bookController;
