"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_authorDao_1 = __importDefault(require("../../daos/author/read_authorDao"));
const read_1 = require("../../repositories/author/read");
class Read_authorController extends read_authorDao_1.default {
    getAuthor(req, res) {
        Read_authorController.get(read_1.SQL_READ_AUTHOR.ALL, [], res);
    }
    findById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Read_authorController.find(read_1.SQL_READ_AUTHOR.LOAD, parameter, res);
    }
}
const read_authorController = new Read_authorController();
exports.default = read_authorController;
