"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_lendDao_1 = __importDefault(require("../../daos/lend/delete_lendDao"));
const delete_1 = require("../../repositories/lend/delete");
class Delete_lendController extends delete_lendDao_1.default {
    deleteById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Delete_lendController.delete(delete_1.SQL_DELETE_LEND.DELETE, parameter, res);
    }
}
const delete_lendController = new Delete_lendController();
exports.default = delete_lendController;
