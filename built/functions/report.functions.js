"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportFuntions = void 0;
const sequelize_1 = require("sequelize");
const main_1 = require("../models/main");
const maintain_model_1 = __importDefault(require("../models/maintain.model"));
class ReportFuntions {
    head;
    static async TotalMaintainanceByStatus(req, res) {
        let selectedStatus = req.params.status;
        let count = await maintain_model_1.default.count({ where: { status: selectedStatus } }).then(data => {
            return res.json(data);
        });
    }
    static async TotalMaintainanceByPriory(req, res) {
        let selectedapariority = req.params.priority;
        let count = await maintain_model_1.default.count({ where: { priority: selectedapariority } }).then(data => {
            return res.json(data);
        });
    }
    static async TotalMaintainanceByDescription(req, res) {
        let selectedDescription = req.params.description;
        let count = await maintain_model_1.default.count({ where: { status: selectedDescription } }).then(data => {
            return res.json(data);
        });
    }
    static async TotalMaintainanceByName(req, res) {
        let selectedname = req.params.name;
        let count = await maintain_model_1.default.count({ where: { name: selectedname } }).then(data => {
            return res.json(data);
        });
    }
    static async TotalMaintainanceByFleet(req, res) {
        let selectedFleet = req.params.fleetNumber;
        let count = await maintain_model_1.default.count({ where: { fleetFleetNumber: selectedFleet } }).then(data => {
            return res.json(data);
        });
    }
    static TotalMaintainanceBy(heading) {
        return async (req, res) => {
            // let selectedvalue: string = req.params.value
            let sql = "SELECT COUNT(*) FROM monitorings WHERE priority = 'High'";
            let result = await main_1.sequelize.query(sql, { type: sequelize_1.QueryTypes.SELECT }).then((data) => {
                let count = data[0];
                return res.send(count);
            });
        };
    }
}
exports.ReportFuntions = ReportFuntions;
