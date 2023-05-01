import { Request, Response } from "express";
import { Sequelize, where } from "sequelize";
import Fleet from "../models/fleet.model";
import Maintain from "../models/maintain.model";
import VideoFootage from "../models/videofootage.model";


export class VideoFootageController{

    public static async create(req: Request, res: Response){
        let Video = req.body
        let request = await VideoFootage.create(Video).then(fleet => {
           return res.json(fleet);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async reveal(req: Request, res: Response){
        let request = await VideoFootage.findAll().then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async revealOne(req: Request, res: Response){
        let videoTicket = req.params.ticket;
        let request = await VideoFootage.findByPk(videoTicket)
        .then(fleet => {
            if(!fleet){
                return res.status(404).send('Fleet not found');
            }else{
                return res.json(fleet);
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        })
    }

    public static async alter(req: Request, res: Response){
        return res.json({
            messege: 'Update Route...'
        });

    }

    public static async remove(req: Request, res: Response){
        let ticketPk = req.params.ticket
        let fleet = await VideoFootage.destroy({where: {Vticket: ticketPk}})
        .then(fleet => {
            res.send(`Fleet ${ticketPk}`);
        })
        .catch(err => {
            return res.status(500).send(err.message);
        })
    }

    public static async revealWithMaintainance(req: Request, res: Response){
        let fleets = await Fleet.findAll({include: Maintain}).then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }
}