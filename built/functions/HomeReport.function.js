"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeReport = void 0;
const monitoring_model_1 = __importDefault(require("../models/monitoring.model"));
class HomeReport {
    static async TotalMaintainanceByPriory(req, res) {
        // let selectedapariority: string = req.params.priority
        let count = await monitoring_model_1.default.findAll({
            group: 'name',
            attributes: ['name',]
        }).then(data => {
            return res.json(data);
        });
    }
}
exports.HomeReport = HomeReport;
