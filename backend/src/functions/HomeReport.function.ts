import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { sequelize } from "../models/main";
import Monitoring from "../models/monitoring.model";

export class HomeReport{

    public static async TotalMaintainanceByPriory(req: Request, res: Response){
        // let selectedapariority: string = req.params.priority
        let count = await Monitoring.findAll({
            group: 'name',
            attributes: ['name',]
        }).then(data => {
            return res.json(data);
        });
    }
}