"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_customerDao_1 = __importDefault(require("../../daos/customer/create_customerDao"));
const create_1 = require("../../repositories/customer/create");
const read_1 = require("../../repositories/customer/read");
class Create_customerController extends create_customerDao_1.default {
    create(req, res) {
        const identification = req.body.identification;
        const name = req.body.customerName;
        const lastName = req.body.customerLastname;
        const address = req.body.address;
        const phone = req.body.phone;
        const parameters = [identification, name, lastName, address, phone];
        Create_customerController.create(read_1.SQL_READ_CUSTOMER.VERIFY, create_1.SQL_CREATE_CUSTOMER.CREATE, parameters, res);
    }
}
const create_customerController = new Create_customerController();
exports.default = create_customerController;
