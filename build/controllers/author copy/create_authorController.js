"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_authorDao_1 = __importDefault(require("../../daos/author/create_authorDao"));
const create_1 = require("../../repositories/author/create");
const read_1 = require("../../repositories/author/read");
class Create_authorController extends create_authorDao_1.default {
    create(req, res) {
        const name = req.body.authorName;
        const lastname = req.body.authorLastname;
        const nationality = req.body.nationality;
        const description = req.body.description;
        const parameters = [name, lastname, nationality, description];
        Create_authorController.create(read_1.SQL_READ_AUTHOR.VERIFY, create_1.SQL_CREATE_AUTHOR.CREATE, parameters, res);
    }
}
const create_authorController = new Create_authorController();
exports.default = create_authorController;
