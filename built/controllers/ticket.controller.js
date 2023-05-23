"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketController = void 0;
const ticket_model_1 = __importDefault(require("../models/ticket.model"));
const videoTicket_model_1 = __importDefault(require("../models/videoTicket.model"));
class TicketController {
    static async create(req, res) {
        let data = req.body;
        let fleet = await ticket_model_1.default.create(data).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async createVTicket(req, res) {
        let data = req.body;
        let fleet = await videoTicket_model_1.default.create(data).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    // public static async revealOne(req: Request, res: Response){
    //     let fleetnumber = req.params.fleetNo;
    //     let fleet = await Fleet.findByPk(fleetnumber)
    //     .then(fleet => {
    //         if(!fleet){
    //             return res.status(404).send('Fleet not found');
    //         }else{
    //             return res.json(fleet);
    //         }
    //     }).catch(err => {
    //         return res.status(500).send(err.message);
    //     })
    // }
    // public static async alter(req: Request, res: Response){
    //     return res.json({
    //         messege: 'Update Route...'
    //     });
    // }
    static async remove(req, res) {
        let scheduleTicket = req.params.fleetNumber;
        let fleet = await ticket_model_1.default.destroy({ where: { ticket: scheduleTicket } })
            .then(fleet => {
            res.send(`Fleet ${scheduleTicket}`);
        })
            .catch(err => {
            return res.status(500).send(err.message);
        });
    }
}
exports.TicketController = TicketController;
