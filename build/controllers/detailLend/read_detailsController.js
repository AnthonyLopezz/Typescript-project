"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_detailsDao_1 = __importDefault(require("../../daos/detailLend/read_detailsDao"));
const read_1 = require("../../repositories/detailLend/read");
class Read_detailsController extends read_detailsDao_1.default {
    getdetails(req, res) {
        Read_detailsController.get(read_1.SQL_READ_DETAILS.ALL, [], res);
    }
    findById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Read_detailsController.find(read_1.SQL_READ_DETAILS.LOAD, parameter, res);
    }
}
const read_detailsController = new Read_detailsController();
exports.default = read_detailsController;
