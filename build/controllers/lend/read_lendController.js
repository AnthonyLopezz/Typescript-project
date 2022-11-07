"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_lendDao_1 = __importDefault(require("../../daos/lend/read_lendDao"));
const read_1 = require("../../repositories/lend/read");
class Read_lendController extends read_lendDao_1.default {
    get(req, res) {
        Read_lendController.get(read_1.SQL_READ_LEND.ALL, [], res);
    }
    findById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Read_lendController.find(read_1.SQL_READ_LEND.LOAD, parameter, res);
    }
}
const read_lendController = new Read_lendController();
exports.default = read_lendController;
