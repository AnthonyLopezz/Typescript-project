"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_authorBookDao_1 = __importDefault(require("../../daos/authorBook/create_authorBookDao"));
const create_1 = require("../../repositories/authorBook/create");
const read_1 = require("../../repositories/authorBook/read");
class Create_authorBookController extends create_authorBookDao_1.default {
    create(req, res) {
        const authorId = req.body.authorId;
        const bookId = req.body.bookId;
        const parameters = [authorId, bookId];
        Create_authorBookController.create(read_1.SQL_READ_AUTHORBOOK.VERIFY, create_1.SQL_CREATE_AUTHORBOOK.CREATE, parameters, res);
    }
}
const create_authorBookController = new Create_authorBookController();
exports.default = create_authorBookController;
