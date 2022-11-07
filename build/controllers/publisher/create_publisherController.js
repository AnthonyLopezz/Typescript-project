"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_publisherDao_1 = __importDefault(require("../../daos/publisher/create_publisherDao"));
const create_1 = require("../../repositories/publisher/create");
const read_1 = require("../../repositories/publisher/read");
class Create_publisherController extends create_publisherDao_1.default {
    create(req, res) {
        const name = req.body.publisherName;
        const country = req.body.country;
        const phone = req.body.phone;
        const parameters = [name, country, phone];
        Create_publisherController.create(read_1.SQL_READ_PUBLISHER.VERIFY, create_1.SQL_CREATE_PUBLISHER.CREATE, parameters, res);
    }
}
const create_publisherController = new Create_publisherController();
exports.default = create_publisherController;
