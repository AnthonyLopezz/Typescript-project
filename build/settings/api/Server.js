"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const authorRoutes_1 = __importDefault(require("../../routes/authorRoutes"));
const bookRoutes_1 = __importDefault(require("../../routes/bookRoutes"));
const customerRoutes_1 = __importDefault(require("../../routes/customerRoutes"));
const lendRoutes_1 = __importDefault(require("../../routes/lendRoutes"));
const publisherRoutes_1 = __importDefault(require("../../routes/publisherRoutes"));
const detailsRoutes_1 = __importDefault(require("../../routes/detailsRoutes"));
const authorBookRoutes_1 = __importDefault(require("../../routes/authorBookRoutes"));
const Validate_1 = __importDefault(require("../../middleware/Validate"));
const AccessRoutes_1 = __importDefault(require("../../routes/AccessRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startConfig();
        this.activateRoutes();
    }
    startConfig() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activateRoutes() {
        //this.app.use('/api/private/author', authorRoutes);
        this.app.use('/api/private/book', bookRoutes_1.default);
        this.app.use('/api/private/customer', customerRoutes_1.default);
        this.app.use('/api/private/lend', lendRoutes_1.default);
        this.app.use('/api/private/publisher', publisherRoutes_1.default);
        this.app.use('/api/private/details', detailsRoutes_1.default);
        this.app.use('/api/private/authorbook', authorBookRoutes_1.default);
        this.app.use('/api/public', AccessRoutes_1.default);
        this.app.use('/api/private/author', Validate_1.default.delToken, authorRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('WORKS! ', this.app.get('PORT'));
        });
    }
}
exports.default = Server;
