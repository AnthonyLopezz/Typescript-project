"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_customerDao_1 = __importDefault(require("../../daos/customer/read_customerDao"));
const read_1 = require("../../repositories/customer/read");
class Read_customerController extends read_customerDao_1.default {
    getAuthor(req, res) {
        Read_customerController.get(read_1.SQL_READ_CUSTOMER.ALL, [], res);
    }
    findById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Read_customerController.find(read_1.SQL_READ_CUSTOMER.LOAD, parameter, res);
    }
    findByQuery(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Read_customerController.find(read_1.SQL_READ_CUSTOMER.QUERY, parameter, res);
    }
}
const read_customerController = new Read_customerController();
exports.default = read_customerController;
