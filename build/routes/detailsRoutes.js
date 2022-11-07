"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_detailsController_1 = __importDefault(require("../controllers/detailLend/create_detailsController"));
const delete_detailsController_1 = __importDefault(require("../controllers/detailLend/delete_detailsController"));
const read_detailsController_1 = __importDefault(require("../controllers/detailLend/read_detailsController"));
const update_detailsController_1 = __importDefault(require("../controllers/detailLend/update_detailsController"));
class DetailsRoutes {
    constructor() {
        this.routeDetailsApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeDetailsApi.get('/all', read_detailsController_1.default.getdetails);
        this.routeDetailsApi.post('/create', create_detailsController_1.default.create);
        this.routeDetailsApi.get('/find/:id', read_detailsController_1.default.findById);
        this.routeDetailsApi.delete('/delete/:id', delete_detailsController_1.default.deleteById);
        this.routeDetailsApi.put('/update', update_detailsController_1.default.updateDetail);
    }
}
const detailsRoutes = new DetailsRoutes();
exports.default = detailsRoutes.routeDetailsApi;
