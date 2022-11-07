"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_customerDao_1 = __importDefault(require("../../daos/customer/update_customerDao"));
const update_1 = require("../../repositories/customer/update");
class Update_customerController extends update_customerDao_1.default {
    updateCustomer(req, res) {
        const id = req.body.customerId;
        const identification = req.body.identification;
        const name = req.body.customerName;
        const lastName = req.body.customerLastname;
        const address = req.body.address;
        const phone = req.body.phone;
        const parameters = [id, identification, name, lastName, address, phone];
        Update_customerController.update(update_1.SQL_UPDATE_CUSTOMER.UPDATE, parameters, res);
    }
}
const update_customerController = new Update_customerController();
exports.default = update_customerController;
