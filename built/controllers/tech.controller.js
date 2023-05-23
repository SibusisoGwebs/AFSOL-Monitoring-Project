"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechController = void 0;
const histroyMaintain_model_1 = __importDefault(require("../models/histroyMaintain.model"));
const tech_model_1 = __importDefault(require("../models/tech.model"));
const TechsOnVideoFootage_model_1 = __importDefault(require("../models/TechsOnVideoFootage.model"));
class TechController {
    static async createTech(req, res) {
        let TechInfor = req.body;
        let tech = await tech_model_1.default.create(TechInfor).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async createTechOnVideo(req, res) {
        let TechInfor = req.body;
        let tech = await TechsOnVideoFootage_model_1.default.create(TechInfor).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async reveal(req, res) {
        let tech = await tech_model_1.default.findAll().then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async revealOne(req, res) {
        let techName = req.params.techname;
        let tech = await tech_model_1.default.findByPk(techName)
            .then(fleet => {
            if (!fleet) {
                return res.status(404).send('Technician not found');
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
        let techPk = req.params.id;
        let fleet = await tech_model_1.default.destroy({ where: { fleetNumber: techPk } })
            .then(fleet => {
            res.send(`Fleet ${techPk}`);
        })
            .catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async allTechsWithMaintainance(req, res) {
        let fleets = await tech_model_1.default.findAll({ include: histroyMaintain_model_1.default }).then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async filteredTechsWithMaintainance(req, res) {
        let fleetticket = req.params.ticket;
        let fleet = await tech_model_1.default.findAll({ where: { ticket: fleetticket }, include: histroyMaintain_model_1.default })
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
exports.TechController = TechController;
