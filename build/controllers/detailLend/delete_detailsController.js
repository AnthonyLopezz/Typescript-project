"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_detailsDao_1 = __importDefault(require("../../daos/detailLend/delete_detailsDao"));
const delete_1 = require("../../repositories/detailLend/delete");
class Delete_detailsController extends delete_detailsDao_1.default {
    deleteById(req, res) {
        const id = req.params.id;
        const parameter = [id];
        Delete_detailsController.delete(delete_1.SQL_DELETE_DETAILS.DELETE, parameter, res);
    }
}
const delete_detailsController = new Delete_detailsController();
exports.default = delete_detailsController;
