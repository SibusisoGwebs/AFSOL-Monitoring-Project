import { Request, Response } from "express";
import { Sequelize, where } from "sequelize";
import { now } from "sequelize/types/utils";
import Fleet from "../models/fleet.model";
import { sequelize } from "../models/main";
import Maintain from "../models/maintain.model";
import Monitoring from "../models/monitoring.model";
import nodemailer from "nodemailer";

export class MonitoringController{



    public static async create(req: Request, res: Response){
        let monitoring = req.body;
        // let fleet = await Monitoring.create(monitoring).then(fleet => {
        //     return res.json(fleet);
        //  }).catch(err => {
        //     return res.status(500).send(err.message)
        //  });

        let transporter = nodemailer.createTransport({
            // service: 'hotmail',
            host: "smtp-mail.outlook.com",
            port: 465,
            secure: true,
            auth: {
                user: "Sibusiso@tanzanite-ms.com",
                pass: "Qaq25655",
            },
            tls: {
                rejectUnauthorized: false
            } 
        });

        let message = {
            from: "Sibusiso@tanzanite-ms.com",
            to: "3744937@myuwc.ac.za",
            subject: "AFSOL Monitoring Testing",
            text: "Plaintext version of the message",
            html: "<p>HTML version of the message</p>"
          };



        if(monitoring.status == 'Maintainance'){
            let fleet = await Monitoring.create(monitoring).then(fleet => {
                Maintain.create(monitoring).then(() => {
                    let info = transporter.sendMail(message, (error, info) => {
                        if(error){
                            return console.log(error);
                        }
                        console.log('Message sent: %s' + info.messageId);
                    })
                    console.log('Fleet in Maintainance Also...')
                })
                return res.json(fleet);
             }).catch(err => {
                return res.status(500).send(err.message)
             });
        }else{
            let fleet = await Monitoring.create(monitoring).then(fleet => {
                    return res.json(fleet);
                 }).catch(err => {
                    return res.status(500).send(err.message)
                 });
        }
    };

    public static async reveal(req: Request, res: Response){
        let fleets = await Monitoring.findAll().then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    };

    public static async revealOne(req: Request, res: Response){
        let fleetnumber = req.params.fleetNumber
        let fleet = await Monitoring.findAll({where: {fleetFleetNumber: fleetnumber}})
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
        let id = req.params.id
        let fleet = await Monitoring.destroy({where: {id: id}})
        .then(fleet => {
            res.send(`Fleet with id of ${id} is deleted`);
        })
        .catch(err => {
            return res.status(500).send(err.message);
        })
    };
}