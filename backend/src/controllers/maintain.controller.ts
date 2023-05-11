import { Request, Response } from "express";
import { Model, Sequelize, where } from "sequelize";
import { sequelize } from "../models/main";
import Monitoring from "../models/monitoring.model";
import Maintain from "../models/maintain.model";
import Fleet from "../models/fleet.model";
import Schedule from "../models/schedule.model";

export class MaintainController{

    public static async create(req: Request, res: Response){
        let maintainance = req.body
        let fleet = await Maintain.create(maintainance).then(fleet => {
           return res.json(fleet);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    };

    public static async reveal(req: Request, res: Response){
        let maintain = await Maintain.findAll().then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    };

    public static async revealOne(req: Request, res: Response){
        let fleetnumber = req.params.fleetNumber
        let fleet = await Maintain.findOne({where: {fleetFleetNumber: fleetnumber}})
        .then(fleet => {
            if(!fleet){
                return res.status(404).send('Fleet not found');
            }else{
                return res.json(fleet);
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        })
    };

    public static async alter(req: Request, res: Response){
        return res.json({
            messege: 'Update Route...'
        });

    };

    public static async remove(req: Request, res: Response){
        let fleetnumber = req.params.fleetNumber
        let fleet = await Maintain.destroy({where: {fleetFleetNumber: fleetnumber}})
        .then(fleet => {
            res.send(`Fleet with id of ${fleetnumber} is deleted`);
        })
        .catch(err => {
            return res.status(500).send(err.message);
        })
    };

    public static async revealWithFleet(req: Request, res: Response){
        let Depot = req.params.depot
        let fleets = await Maintain.findAll({include: {model: Fleet, where: {depot: Depot}}}).then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async revealOneFleet(req: Request, res: Response){
        let fleetnumber = req.params.fleetNumber
        let fleet = await Maintain.findOne({where: {fleetFleetNumber: fleetnumber}, include: Fleet})
        .then(fleet => {
            if(!fleet){
                return res.status(404).send('Fleet not found');
            }else{
                return res.json(fleet);
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        })
    };

    public static async AllScheduledFleet(req: Request, res: Response){
        let Schedulefleet = await Maintain.findAll({ include: [
            {
                model: Fleet,
                attributes: ['depot', 'numberofMaintainance'],
                required: true
            },
            {
                model: Schedule,
                attributes: ['ticket', 'date'],
                required: true,
            }
        ]})
        .then(fleet => {
            if(!fleet){
                return res.status(404).send('Fleet not found');
            }else{
                return res.json(fleet);
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        })
    };

    public static async OneFleetAndSchedule(req: Request, res: Response){
        let fleetnumber = req.params.fleetNumber
        let fleet = await Maintain.findOne({where: {fleetFleetNumber: fleetnumber}, include: [
            {
                model: Fleet,
                attributes: ['depot', 'numberofMaintainance'],
                required: true
            },
            {
                model: Schedule,
                attributes: ['id', 'ticket'],
                required: true
            }
        ]})
        .then(fleet => {
            if(!fleet){
                return res.status(404).send('Fleet not found');
            }else{
                return res.json(fleet);
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        })
    };
}