import { Request, Response } from "express";
import Monitors from "../models/Monitors.model";

export class MonitorsController{

    public static async create(req: Request, res: Response){
        let Monitor = req.body
        let monitors = await Monitors.create(Monitor).then(monitor => {
            return res.json(monitor);
        }).catch(err => {
            return res.status(500).send(err.message)
        })
    }

    public static async fetchAll(req: Request, res: Response){
        let named = req.body
        let monitor = await Monitors.findAll({where: {name: named.name}}).then(monitor => {
            return res.json(monitor);
        }).catch(err => {
            return res.status(500).send(err.message);
        })
    }

    public static async fetchOne(req: Request, res: Response){
        let name = req.params.monitor;
        let monitor = await Monitors.findOne({where: {name: name}}).then(monitor => {
            return res.json(monitor);
        }).catch(err => {
            return res.status(500).send(err.message);
        })
    }

    public static async remove(req: Request, res: Response){
        let monitor = await Monitors.destroy({where: {}}).then(() => {
            return res.send('All Cleared...');
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }

    // public static async remove(req: Request, res: Response){
    //     let fleetPk = req.params.fleetNumber
    //     let fleet = await Monitors.destroy({where: {fleetNumber: fleetPk}})
    //     .then(fleet => {
    //         res.send(`Fleet ${fleetPk}`);
    //     })
    //     .catch(err => {
    //         return res.status(500).send(err.message);
    //     })
    // }
}