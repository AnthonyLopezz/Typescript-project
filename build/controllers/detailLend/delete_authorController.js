"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_authorDao_1 = __importDefault(require("../../daos/author/delete_authorDao"));
const delete_1 = require("../../repositories/author/delete");
class Delete_authorController extends delete_authorDao_1.default {
    deleteById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Delete_authorController.delete(delete_1.SQL_DELETE_AUTHOR.DELETE, parameter, res);
    }
}
const delete_authorController = new Delete_authorController();
exports.default = delete_authorController;
