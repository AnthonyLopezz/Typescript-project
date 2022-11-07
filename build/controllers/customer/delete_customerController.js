"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_customerDao_1 = __importDefault(require("../../daos/customer/delete_customerDao"));
const delete_1 = require("../../repositories/customer/delete");
class Delete_customerController extends delete_customerDao_1.default {
    deleteById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Delete_customerController.delete(delete_1.SQL_DELETE_CUSTOMER.DELETE, parameter, res);
    }
}
const delete_customerController = new Delete_customerController();
exports.default = delete_customerController;
