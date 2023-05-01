import { Request, Response } from "express";
import { Sequelize, where } from "sequelize";
import Schedule from "../models/schedule.model";


export class ScheduleController{

    public static async create(req: Request, res: Response){
        let data = req.body
        let fleet = await Schedule.create(data).then(fleet => {
           return res.json(fleet);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async revealAllSchedules(req: Request, res: Response){
        let fleets = await Schedule.findAll().then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
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

    public static async remove(req: Request, res: Response){
        let scheduleTicket = req.params.ticket
        let fleet = await Schedule.destroy({where: {ticket: scheduleTicket}})
        .then(fleet => {
            res.send(`Fleet ${scheduleTicket}`);
        })
        .catch(err => {
            return res.status(500).send(err.message);
        })
    }
}