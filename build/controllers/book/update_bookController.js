"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_bookDao_1 = __importDefault(require("../../daos/book/update_bookDao"));
const update_1 = require("../../repositories/book/update");
class Update_bookController extends update_bookDao_1.default {
    updateBook(req, res) {
        const id = req.body.bookId;
        const title = req.body.bookTitle;
        const publicationDate = req.body.publicationDate;
        const code = req.body.code;
        const isbn = req.body.isbn;
        const publisherId = req.body.publisherId;
        const parameters = [id, title, publicationDate, code, isbn, publisherId];
        Update_bookController.update(update_1.SQL_UPDATE_BOOK.UPDATE, parameters, res);
    }
}
const update_bookController = new Update_bookController();
exports.default = update_bookController;
