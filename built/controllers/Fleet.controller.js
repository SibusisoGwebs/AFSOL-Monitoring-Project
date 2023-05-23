"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetController = void 0;
const fleet_model_1 = __importDefault(require("../models/fleet.model"));
const maintain_model_1 = __importDefault(require("../models/maintain.model"));
class FleetController {
    static async create(req, res) {
        let FLEET = req.body;
        let fleet = await fleet_model_1.default.create(FLEET).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async reveal(req, res) {
        let Depot = req.params.depot;
        let fleets = await fleet_model_1.default.findAll({ where: { depot: Depot } }).then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async revealOne(req, res) {
        let fleetnumber = req.params.fleetNo;
        let fleet = await fleet_model_1.default.findByPk(fleetnumber)
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
        let fleetPk = req.params.fleetNumber;
        let fleet = await fleet_model_1.default.destroy({ where: { fleetNumber: fleetPk } })
            .then(fleet => {
            res.send(`Fleet ${fleetPk}`);
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
exports.FleetController = FleetController;
