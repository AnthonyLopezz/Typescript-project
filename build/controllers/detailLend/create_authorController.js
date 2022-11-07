"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_detailsDao_1 = __importDefault(require("../../daos/detailLend/create_detailsDao"));
const create_1 = require("../../repositories/detailLend/create");
const read_1 = require("../../repositories/detailLend/read");
class Create_detailsController extends create_detailsDao_1.default {
    create(req, res) {
        const author = req.body.authorId;
        const book = req.body.bookId;
        const returnDate = req.body.returnDate;
        const daysLate = req.body.daysLate;
        const description = req.body.description;
        const deliveryDate = req.body.deliveryDate;
        const parameters = [author, book, returnDate, daysLate, description, deliveryDate];
        Create_detailsController.create(read_1.SQL_READ_DETAILS.VERIFY, create_1.SQL_CREATE_DETAILS.CREATE, parameters, res);
    }
}
const create_detailsController = new Create_detailsController();
exports.default = create_detailsController;
