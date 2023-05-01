import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { sequelize } from "../models/main";
import Maintain from "../models/maintain.model";

export class ReportFuntions{
    head!: string;


    public static async TotalMaintainanceByStatus(req: Request, res: Response){
        let selectedStatus: string = req.params.status
        let count = await Maintain.count({where: {status: selectedStatus}}).then(data => {
            return res.json(data);
        });
    }

    public static async TotalMaintainanceByPriory(req: Request, res: Response){
        let selectedapariority: string = req.params.priority
        let count = await Maintain.count({where: {priority: selectedapariority}}).then(data => {
            return res.json(data);
        });
    }

    public static async TotalMaintainanceByDescription(req: Request, res: Response){
        let selectedDescription: string = req.params.description
        let count = await Maintain.count({where: {status: selectedDescription}}).then(data => {
            return res.json(data);
        });
    }

    public static async TotalMaintainanceByName(req: Request, res: Response){
        let selectedname: string = req.params.name
        let count = await Maintain.count({where: {name: selectedname}}).then(data => {
            return res.json(data);
        });
    }

    public static async TotalMaintainanceByFleet(req: Request, res: Response){
        let selectedFleet: string = req.params.fleetNumber
        let count = await Maintain.count({where: {fleetFleetNumber: selectedFleet}}).then(data => {
            return res.json(data);
        });
    }

    public static TotalMaintainanceBy(heading: string){
        return async (req: Request, res: Response) => {
            // let selectedvalue: string = req.params.value
            let sql: string = "SELECT COUNT(*) FROM monitorings WHERE priority = 'High'";
            let result = await sequelize.query(sql, {type: QueryTypes.SELECT}).then((data) => {
                let count = data[0]
                return res.send(count)
            })
        }
    }
}