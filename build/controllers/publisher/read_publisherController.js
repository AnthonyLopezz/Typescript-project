"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const read_publisherDao_1 = __importDefault(require("../../daos/publisher/read_publisherDao"));
const read_1 = require("../../repositories/publisher/read");
class Read_publisherController extends read_publisherDao_1.default {
    getpublisher(req, res) {
        Read_publisherController.get(read_1.SQL_READ_PUBLISHER.ALL, [], res);
    }
    findById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Read_publisherController.find(read_1.SQL_READ_PUBLISHER.LOAD, parameter, res);
    }
    findByQuery(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Read_publisherController.find(read_1.SQL_READ_PUBLISHER.QUERY, parameter, res);
    }
}
const read_publisherController = new Read_publisherController();
exports.default = read_publisherController;
