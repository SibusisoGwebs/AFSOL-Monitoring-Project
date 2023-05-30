"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoFootageController = void 0;
const fleet_model_1 = __importDefault(require("../models/fleet.model"));
const maintain_model_1 = __importDefault(require("../models/maintain.model"));
const videofootage_model_1 = __importDefault(require("../models/videofootage.model"));
class VideoFootageController {
    static async create(req, res) {
        let Video = req.body;
        let request = await videofootage_model_1.default.create(Video).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async reveal(req, res) {
        let request = await videofootage_model_1.default.findAll().then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async revealOne(req, res) {
        let videoTicket = req.params.ticket;
        let request = await videofootage_model_1.default.findByPk(videoTicket)
            .then(fleet => {
            if (!fleet) {
                return res.status(404).send('Fleet not found');
            }
            else {
                return res.json(fleet);
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async alter(req, res) {
        return res.json({
            messege: 'Update Route...'
        });
    }
    static async remove(req, res) {
        let ticketPk = req.params.ticket;
        let fleet = await videofootage_model_1.default.destroy({ where: { Vticket: ticketPk } })
            .then(fleet => {
            res.send(`Fleet ${ticketPk}`);
        })
            .catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async revealWithMaintainance(req, res) {
        let fleets = await fleet_model_1.default.findAll({ include: maintain_model_1.default }).then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
}
exports.VideoFootageController = VideoFootageController;
