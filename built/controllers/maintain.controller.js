"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintainController = void 0;
const maintain_model_1 = __importDefault(require("../models/maintain.model"));
const fleet_model_1 = __importDefault(require("../models/fleet.model"));
const schedule_model_1 = __importDefault(require("../models/schedule.model"));
class MaintainController {
    static async create(req, res) {
        let maintainance = req.body;
        let fleet = await maintain_model_1.default.create(maintainance).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    ;
    static async reveal(req, res) {
        let maintain = await maintain_model_1.default.findAll().then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    ;
    static async revealOne(req, res) {
        let fleetnumber = req.params.fleetNumber;
        let fleet = await maintain_model_1.default.findOne({ where: { fleetFleetNumber: fleetnumber } })
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
    ;
    static async alter(req, res) {
        return res.json({
            messege: 'Update Route...'
        });
    }
    ;
    static async remove(req, res) {
        let fleetnumber = req.params.fleetNumber;
        let fleet = await maintain_model_1.default.destroy({ where: { fleetFleetNumber: fleetnumber } })
            .then(fleet => {
            res.send(`Fleet with id of ${fleetnumber} is deleted`);
        })
            .catch(err => {
            return res.status(500).send(err.message);
        });
    }
    ;
    static async revealWithFleet(req, res) {
        let Depot = req.params.depot;
        let fleets = await maintain_model_1.default.findAll({ include: { model: fleet_model_1.default, where: { depot: Depot } } }).then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async revealOneFleet(req, res) {
        let fleetnumber = req.params.fleetNumber;
        let fleet = await maintain_model_1.default.findOne({ where: { fleetFleetNumber: fleetnumber }, include: fleet_model_1.default })
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
    ;
    static async AllScheduledFleet(req, res) {
        let Schedulefleet = await maintain_model_1.default.findAll({ include: [
                {
                    model: fleet_model_1.default,
                    attributes: ['depot', 'numberofMaintainance'],
                    required: true
                },
                {
                    model: schedule_model_1.default,
                    attributes: ['ticket', 'date'],
                    required: true,
                }
            ] })
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
    ;
    static async OneFleetAndSchedule(req, res) {
        let fleetnumber = req.params.fleetNumber;
        let fleet = await maintain_model_1.default.findOne({ where: { fleetFleetNumber: fleetnumber }, include: [
                {
                    model: fleet_model_1.default,
                    attributes: ['depot', 'numberofMaintainance'],
                    required: true
                },
                {
                    model: schedule_model_1.default,
                    attributes: ['id', 'ticket'],
                    required: true
                }
            ] })
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
    ;
}
exports.MaintainController = MaintainController;
