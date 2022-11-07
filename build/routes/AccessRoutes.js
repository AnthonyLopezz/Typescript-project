"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accessController_1 = __importDefault(require("../controllers/user/accessController"));
class AccessRoutes {
    constructor() {
        this.routeAccessApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routeAccessApi.post('/access', accessController_1.default.verify);
    }
}
const accessRoutes = new AccessRoutes();
exports.default = accessRoutes.routeAccessApi;
