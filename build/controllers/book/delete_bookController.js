"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_bookDao_1 = __importDefault(require("../../daos/book/delete_bookDao"));
const delete_1 = require("../../repositories/book/delete");
class Delete_bookController extends delete_bookDao_1.default {
    deleteById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Delete_bookController.delete(delete_1.SQL_DELETE_BOOK.DELETE, parameter, res);
    }
}
const delete_bookController = new Delete_bookController();
exports.default = delete_bookController;
