"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorsController = void 0;
const Monitors_model_1 = __importDefault(require("../models/Monitors.model"));
class MonitorsController {
    static async create(req, res) {
        let Monitor = req.body;
        let monitors = await Monitors_model_1.default.create(Monitor).then(monitor => {
            return res.json(monitor);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async fetchAll(req, res) {
        let named = req.body;
        let monitor = await Monitors_model_1.default.findAll({ where: { name: named.name } }).then(monitor => {
            return res.json(monitor);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async fetchOne(req, res) {
        let name = req.params.monitor;
        let monitor = await Monitors_model_1.default.findOne({ where: { name: name } }).then(monitor => {
            return res.json(monitor);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async remove(req, res) {
        let monitor = await Monitors_model_1.default.destroy({ where: {} }).then(() => {
            return res.send('All Cleared...');
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
}
exports.MonitorsController = MonitorsController;
