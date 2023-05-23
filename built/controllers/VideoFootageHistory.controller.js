"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoFootageHistoryController = void 0;
const historyVideoFootage_model_1 = __importDefault(require("../models/historyVideoFootage.model"));
class VideoFootageHistoryController {
    static async create(req, res) {
        let maintainedFleet = req.body;
        let fleet = await historyVideoFootage_model_1.default.create(maintainedFleet).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
}
exports.VideoFootageHistoryController = VideoFootageHistoryController;
