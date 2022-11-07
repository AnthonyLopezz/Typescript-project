"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accessDao_1 = __importDefault(require("../../daos/user/accessDao"));
const access_1 = require("../../repositories/user/access");
class AccessController extends accessDao_1.default {
    verify(req, res) {
        const nick = req.body.userNick;
        const pass = req.body.password;
        const parameter = [nick, pass];
        AccessController.access(access_1.SQL_ACCESS.VERIFY, parameter, res);
    }
}
const accessController = new AccessController();
exports.default = accessController;
