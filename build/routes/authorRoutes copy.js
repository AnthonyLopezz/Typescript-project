"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_authorController_1 = __importDefault(require("../controllers/author/create_authorController"));
const delete_authorController_1 = __importDefault(require("../controllers/author/delete_authorController"));
const read_authorController_1 = __importDefault(require("../controllers/author/read_authorController"));
const update_authorController_1 = __importDefault(require("../controllers/author/update_authorController"));
class AuthorRoutes {
    constructor() {
        this.routeAuthorApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeAuthorApi.get('/all', read_authorController_1.default.getAuthor);
        this.routeAuthorApi.post('/create', create_authorController_1.default.create);
        this.routeAuthorApi.get('/find/:id', read_authorController_1.default.findById);
        this.routeAuthorApi.delete('/delete/:id', delete_authorController_1.default.deleteById);
        this.routeAuthorApi.put('/update', update_authorController_1.default.updateAuthor);
    }
}
const authorRoutes = new AuthorRoutes();
exports.default = authorRoutes.routeAuthorApi;
