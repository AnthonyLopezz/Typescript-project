"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_lendDao_1 = __importDefault(require("../../daos/lend/create_lendDao"));
const create_1 = require("../../repositories/lend/create");
const read_1 = require("../../repositories/lend/read");
class Create_lendController extends create_lendDao_1.default {
    create(req, res) {
        const date = req.body.startDate;
        const description = req.body.description;
        const customerId = req.body.customerId;
        const parameters = [date, description, customerId];
        Create_lendController.create(read_1.SQL_READ_LEND.VERIFY, create_1.SQL_CREATE_LEND.CREATE, parameters, res);
    }
}
const create_lendController = new Create_lendController();
exports.default = create_lendController;
