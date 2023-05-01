import { Request, Response } from "express";
import { Sequelize, where } from "sequelize";
import Techs from "../models/tech.model";
import HVideoFootage from "../models/historyVideoFootage.model";



export class VideoFootageHistoryController{

    public static async create(req: Request, res: Response){
        let maintainedFleet = req.body;
        let fleet = await HVideoFootage.create(maintainedFleet).then(fleet => {
           return res.json(fleet);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }
}