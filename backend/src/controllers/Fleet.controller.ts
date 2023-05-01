import { Request, Response } from "express";
import { Sequelize, where } from "sequelize";
import Fleet from "../models/fleet.model";
import Maintain from "../models/maintain.model";


export class FleetController{

    public static async create(req: Request, res: Response){
        let FLEET = req.body
        let fleet = await Fleet.create(FLEET).then(fleet => {
           return res.json(fleet);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async reveal(req: Request, res: Response){
        let fleets = await Fleet.findAll().then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async revealOne(req: Request, res: Response){
        let fleetnumber = req.params.fleetNo;
        let fleet = await Fleet.findByPk(fleetnumber)
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
        let fleetPk = req.params.fleetNumber
        let fleet = await Fleet.destroy({where: {fleetNumber: fleetPk}})
        .then(fleet => {
            res.send(`Fleet ${fleetPk}`);
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