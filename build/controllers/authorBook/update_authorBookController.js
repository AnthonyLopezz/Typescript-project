"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_authorBookDao_1 = __importDefault(require("../../daos/authorBook/update_authorBookDao"));
const update_1 = require("../../repositories/authorBook/update");
class Update_authorBookController extends update_authorBookDao_1.default {
    updateAuthorBook(req, res) {
        const id = req.body.authorBookId;
        const authorId = req.body.authorId;
        const bookId = req.body.bookId;
        const parameters = [id, authorId, bookId];
        Update_authorBookController.update(update_1.SQL_UPDATE_AUTHORBOOK.UPDATE, parameters, res);
    }
}
const update_authorBookController = new Update_authorBookController();
exports.default = update_authorBookController;
