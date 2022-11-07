"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_authorBookDao_1 = __importDefault(require("../../daos/authorBook/delete_authorBookDao"));
const delete_1 = require("../../repositories/authorBook/delete");
class Delete_authorBookController extends delete_authorBookDao_1.default {
    deleteById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Delete_authorBookController.delete(delete_1.SQL_DELETE_AUTHORBOOK.DELETE, parameter, res);
    }
}
const delete_authorBookController = new Delete_authorBookController();
exports.default = delete_authorBookController;
