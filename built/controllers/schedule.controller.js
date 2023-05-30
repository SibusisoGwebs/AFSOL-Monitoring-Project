"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleController = void 0;
const schedule_model_1 = __importDefault(require("../models/schedule.model"));
class ScheduleController {
    static async create(req, res) {
        let data = req.body;
        let fleet = await schedule_model_1.default.create(data).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async revealAllSchedules(req, res) {
        let fleets = await schedule_model_1.default.findAll().then(fleets => {
            return res.json(fleets);
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
        let scheduleTicket = req.params.ticket;
        let fleet = await schedule_model_1.default.destroy({ where: { ticket: scheduleTicket } })
            .then(fleet => {
            res.send(`Fleet ${scheduleTicket}`);
        })
            .catch(err => {
            return res.status(500).send(err.message);
        });
    }
}
exports.ScheduleController = ScheduleController;
