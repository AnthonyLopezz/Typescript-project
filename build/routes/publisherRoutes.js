"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_publisherController_1 = __importDefault(require("../controllers/publisher/create_publisherController"));
const delete_publisherController_1 = __importDefault(require("../controllers/publisher/delete_publisherController"));
const read_publisherController_1 = __importDefault(require("../controllers/publisher/read_publisherController"));
const update_publisherController_1 = __importDefault(require("../controllers/publisher/update_publisherController"));
class PublisherRoutes {
    constructor() {
        this.routePublisherApi = (0, express_1.Router)();
        this.settings();
    }
    settings() {
        this.routePublisherApi.get('/all', read_publisherController_1.default.getpublisher);
        this.routePublisherApi.post('/create', create_publisherController_1.default.create);
        this.routePublisherApi.get('/find/:id', read_publisherController_1.default.findById);
        this.routePublisherApi.get('/findquery/:id', read_publisherController_1.default.findByQuery);
        this.routePublisherApi.delete('/delete/:id', delete_publisherController_1.default.deleteById);
        this.routePublisherApi.put('/update', update_publisherController_1.default.updatePublisher);
    }
}
const publisherRoutes = new PublisherRoutes();
exports.default = publisherRoutes.routePublisherApi;
