"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_publisherDao_1 = __importDefault(require("../../daos/publisher/update_publisherDao"));
const update_1 = require("../../repositories/publisher/update");
class Update_publisherController extends update_publisherDao_1.default {
    updatePublisher(req, res) {
        const id = req.body.publisherId;
        const name = req.body.publisherName;
        const country = req.body.country;
        const phone = req.body.phone;
        const parameters = [id, name, country, phone];
        Update_publisherController.update(update_1.SQL_UPDATE_PUBLISHER.UPDATE, parameters, res);
    }
}
const update_publisherController = new Update_publisherController();
exports.default = update_publisherController;
