"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_lendController_1 = __importDefault(require("../controllers/lend/create_lendController"));
const delete_lendController_1 = __importDefault(require("../controllers/lend/delete_lendController"));
const read_lendController_1 = __importDefault(require("../controllers/lend/read_lendController"));
const update_lendController_1 = __importDefault(require("../controllers/lend/update_lendController"));
class LendRoutes {
    constructor() {
        this.routeLendApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeLendApi.get('/all', read_lendController_1.default.get);
        this.routeLendApi.post('/create', create_lendController_1.default.create);
        this.routeLendApi.get('/find/:id', read_lendController_1.default.findById);
        this.routeLendApi.delete('/delete/:id', delete_lendController_1.default.deleteById);
        this.routeLendApi.put('/update', update_lendController_1.default.updateLend);
    }
}
const lendRoutes = new LendRoutes();
exports.default = lendRoutes.routeLendApi;
