import { Request, Response } from "express";
import { Sequelize, where } from "sequelize";
import MaintainHistory from "../models/histroyMaintain.model";
import Techs from "../models/tech.model";



export class HistrotMaintainController{

    public static async create(req: Request, res: Response){
        let maintainedFleet = req.body
        let fleet = await MaintainHistory.create(maintainedFleet).then(fleet => {
           return res.json(fleet);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async reveal(req: Request, res: Response){
        let fleets = await MaintainHistory.findAll().then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async revealOne(req: Request, res: Response){
        let maintainedFleet = req.params.fleetNo;
        let fleet = await MaintainHistory.findByPk(maintainedFleet)
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

    public static async revealOneWithTech(req: Request, res: Response){
        let fleetticket= req.params.ticket
        let fleet = await MaintainHistory.findOne({where: {techniciansTicket: fleetticket}, include: Techs})
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

    //From this sections we dealing with APIs that Fetch Reporting Data.
    //The Data will be data on Maintainnance history and Technicians

    public static async allHistMaintainance(req: Request, res: Response){
        let fleets = await MaintainHistory.findAll({include: Techs}).then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async filteredHistMaintainance(req: Request, res: Response){
        let fleetticket= req.params.ticket
        let fleet = await MaintainHistory.findAll({where: {technicianTicket: fleetticket}, include: Techs})
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