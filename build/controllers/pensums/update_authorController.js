"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_authorDao_1 = __importDefault(require("../../daos/author/update_authorDao"));
const update_1 = require("../../repositories/author/update");
class Update_authorController extends update_authorDao_1.default {
    updateAuthor(req, res) {
        const id = req.body.authorId;
        const name = req.body.authorName;
        const lastname = req.body.authorLastname;
        const nationality = req.body.nationality;
        const description = req.body.description;
        const parameters = [id, name, lastname, nationality, description];
        Update_authorController.update(update_1.SQL_UPDATE_AUTHOR.UPDATE, parameters, res);
    }
}
const update_authorController = new Update_authorController();
exports.default = update_authorController;
