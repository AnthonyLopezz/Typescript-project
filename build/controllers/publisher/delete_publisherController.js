"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_publisherDao_1 = __importDefault(require("../../daos/publisher/delete_publisherDao"));
const delete_1 = require("../../repositories/publisher/delete");
class Delete_publisherController extends delete_publisherDao_1.default {
    deleteById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Delete_publisherController.delete(delete_1.SQL_DELETE_PUBLISHER.DELETE, parameter, res);
    }
}
const delete_publisherController = new Delete_publisherController();
exports.default = delete_publisherController;
