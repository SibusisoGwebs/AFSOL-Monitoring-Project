"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistrotMaintainController = void 0;
const histroyMaintain_model_1 = __importDefault(require("../models/histroyMaintain.model"));
const tech_model_1 = __importDefault(require("../models/tech.model"));
class HistrotMaintainController {
    static async create(req, res) {
        let maintainedFleet = req.body;
        let fleet = await histroyMaintain_model_1.default.create(maintainedFleet).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async reveal(req, res) {
        let fleets = await histroyMaintain_model_1.default.findAll().then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async revealOne(req, res) {
        let maintainedFleet = req.params.fleetNo;
        let fleet = await histroyMaintain_model_1.default.findByPk(maintainedFleet)
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
    // public static async remove(req: Request, res: Response){
    //     let fleetPk = req.params.fleetNumber
    //     let fleet = await MaintainHistory.destroy({where: {depot: fleetPk}})
    //     .then(fleet => {
    //         res.send(`Fleet ${fleetPk}`);
    //     })
    //     .catch(err => {
    //         return res.status(500).send(err.message);
    //     })
    // }
    static async revealOneWithTech(req, res) {
        let fleetticket = req.params.ticket;
        let fleet = await histroyMaintain_model_1.default.findOne({ where: { techniciansTicket: fleetticket }, include: tech_model_1.default })
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
    //From this sections we dealing with APIs that Fetch Reporting Data.
    //The Data will be data on Maintainnance history and Technicians
    static async allHistMaintainance(req, res) {
        let fleets = await histroyMaintain_model_1.default.findAll({ include: tech_model_1.default }).then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async filteredHistMaintainance(req, res) {
        let fleetticket = req.params.ticket;
        let fleet = await histroyMaintain_model_1.default.findAll({ where: { technicianTicket: fleetticket }, include: tech_model_1.default })
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
exports.HistrotMaintainController = HistrotMaintainController;
