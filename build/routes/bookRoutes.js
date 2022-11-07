"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_bookController_1 = __importDefault(require("../controllers/book/create_bookController"));
const delete_bookController_1 = __importDefault(require("../controllers/book/delete_bookController"));
const read_bookController_1 = __importDefault(require("../controllers/book/read_bookController"));
const update_bookController_1 = __importDefault(require("../controllers/book/update_bookController"));
class BookRoutes {
    constructor() {
        this.routeBookApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeBookApi.get('/all', read_bookController_1.default.getAuthor);
        this.routeBookApi.post('/create', create_bookController_1.default.create);
        this.routeBookApi.get('/find/:id', read_bookController_1.default.findById);
        this.routeBookApi.get('/findquery/:id', read_bookController_1.default.findByQuery);
        this.routeBookApi.delete('/delete/:id', delete_bookController_1.default.deleteById);
        this.routeBookApi.put('/update', update_bookController_1.default.updateBook);
    }
}
const bookRoutes = new BookRoutes();
exports.default = bookRoutes.routeBookApi;
