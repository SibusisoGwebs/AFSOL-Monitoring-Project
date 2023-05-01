import { Request, Response } from "express";
import Ticket from "../models/ticket.model";
import VideoTicket from "../models/videoTicket.model";


export class TicketController{

    public static async create(req: Request, res: Response){
        let data = req.body
        let fleet = await Ticket.create(data).then(fleet => {
           return res.json(fleet);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async createVTicket(req: Request, res: Response){
        let data = req.body
        let fleet = await VideoTicket.create(data).then(fleet => {
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

    public static async remove(req: Request, res: Response){
        let scheduleTicket = req.params.fleetNumber
        let fleet = await Ticket.destroy({where: {ticket: scheduleTicket}})
        .then(fleet => {
            res.send(`Fleet ${scheduleTicket}`);
        })
        .catch(err => {
            return res.status(500).send(err.message);
        })
    }
}