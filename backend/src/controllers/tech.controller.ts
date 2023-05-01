import { Request, Response } from "express";
import { Sequelize, where } from "sequelize";
import MaintainHistory from "../models/histroyMaintain.model";
import { sequelize } from "../models/main";
import Techs from "../models/tech.model";
import VideoFootageTech from "../models/TechsOnVideoFootage.model";

export class TechController{

    public static async createTech(req: Request, res: Response){
        let TechInfor = req.body
        let tech = await Techs.create(TechInfor).then(fleet => {
           return res.json(fleet);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async createTechOnVideo(req: Request, res: Response){
        let TechInfor = req.body
        let tech = await VideoFootageTech.create(TechInfor).then(fleet => {
           return res.json(fleet);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async reveal(req: Request, res: Response){
        let tech = await Techs.findAll().then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async revealOne(req: Request, res: Response){
        let techName = req.params.techname;
        let tech = await Techs.findByPk(techName)
        .then(fleet => {
            if(!fleet){
                return res.status(404).send('Technician not found');
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
        let techPk = req.params.id
        let fleet = await Techs.destroy({where: {fleetNumber: techPk}})
        .then(fleet => {
            res.send(`Fleet ${techPk}`);
        })
        .catch(err => {
            return res.status(500).send(err.message);
        })
    }

    public static async allTechsWithMaintainance(req: Request, res: Response){
        let fleets = await Techs.findAll({include: MaintainHistory}).then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async filteredTechsWithMaintainance(req: Request, res: Response){
        let fleetticket= req.params.ticket
        let fleet = await Techs.findAll({where: {ticket: fleetticket}, include: MaintainHistory})
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