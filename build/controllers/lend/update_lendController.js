"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_lendDao_1 = __importDefault(require("../../daos/lend/update_lendDao"));
const update_1 = require("../../repositories/lend/update");
class Update_lendController extends update_lendDao_1.default {
    updateLend(req, res) {
        const id = req.body.lendId;
        const date = req.body.startDate;
        const description = req.body.description;
        const customerId = req.body.customerId;
        const parameters = [id, date, description, customerId];
        Update_lendController.update(update_1.SQL_UPDATE_LEND.UPDATE, parameters, res);
    }
}
const update_lendController = new Update_lendController();
exports.default = update_lendController;
