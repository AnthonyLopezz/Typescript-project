"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_detailsDao_1 = __importDefault(require("../../daos/detailLend/update_detailsDao"));
const update_1 = require("../../repositories/detailLend/update");
class Update_detailsController extends update_detailsDao_1.default {
    updateDetail(req, res) {
        const id = req.body.detailLendId;
        const lend = req.body.lendId;
        const book = req.body.bookId;
        const returnDate = req.body.returnDate;
        const daysLate = req.body.daysLate;
        const description = req.body.description;
        const deliveryDay = req.body.deliveryDay;
        const parameters = [id, lend, book, returnDate, daysLate, description, deliveryDay];
        Update_detailsController.update(update_1.SQL_UPDATE_DETAILS.UPDATE, parameters, res);
    }
}
const update_detailsController = new Update_detailsController();
exports.default = update_detailsController;
