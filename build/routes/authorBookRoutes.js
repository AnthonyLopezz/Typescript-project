"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_authorBookController_1 = __importDefault(require("../controllers/authorBook/create_authorBookController"));
const delete_authorBookController_1 = __importDefault(require("../controllers/authorBook/delete_authorBookController"));
const read_authorBookController_1 = __importDefault(require("../controllers/authorBook/read_authorBookController"));
const update_authorBookController_1 = __importDefault(require("../controllers/authorBook/update_authorBookController"));
class AuthorBookRoutes {
    constructor() {
        this.routeAuthorBookApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeAuthorBookApi.get('/all', read_authorBookController_1.default.getAuthorBook);
        this.routeAuthorBookApi.post('/create', create_authorBookController_1.default.create);
        this.routeAuthorBookApi.get('/find/:id', read_authorBookController_1.default.findById);
        this.routeAuthorBookApi.delete('/delete/:id', delete_authorBookController_1.default.deleteById);
        this.routeAuthorBookApi.put('/update', update_authorBookController_1.default.updateAuthorBook);
    }
}
const authorBookRoutes = new AuthorBookRoutes();
exports.default = authorBookRoutes.routeAuthorBookApi;
