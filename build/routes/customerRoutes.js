"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_customerController_1 = __importDefault(require("../controllers/customer/create_customerController"));
const delete_customerController_1 = __importDefault(require("../controllers/customer/delete_customerController"));
const read_customerController_1 = __importDefault(require("../controllers/customer/read_customerController"));
const update_customerController_1 = __importDefault(require("../controllers/customer/update_customerController"));
class CustomerRoutes {
    constructor() {
        this.routeCustomerApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeCustomerApi.get('/all', read_customerController_1.default.getAuthor);
        this.routeCustomerApi.post('/create', create_customerController_1.default.create);
        this.routeCustomerApi.get('/find/:id', read_customerController_1.default.findById);
        this.routeCustomerApi.get('/findquery/:id', read_customerController_1.default.findByQuery);
        this.routeCustomerApi.delete('/delete/:id', delete_customerController_1.default.deleteById);
        this.routeCustomerApi.put('/update', update_customerController_1.default.updateCustomer);
    }
}
const customerRoutes = new CustomerRoutes();
exports.default = customerRoutes.routeCustomerApi;
