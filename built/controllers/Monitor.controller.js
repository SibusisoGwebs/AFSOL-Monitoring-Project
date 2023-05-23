"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitoringController = void 0;
const maintain_model_1 = __importDefault(require("../models/maintain.model"));
const monitoring_model_1 = __importDefault(require("../models/monitoring.model"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class MonitoringController {
    static async create(req, res) {
        let monitoring = req.body;
        // let fleet = await Monitoring.create(monitoring).then(fleet => {
        //     return res.json(fleet);
        //  }).catch(err => {
        //     return res.status(500).send(err.message)
        //  });
        let transporter = nodemailer_1.default.createTransport({
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
        if (monitoring.status == 'Maintainance') {
            let fleet = await monitoring_model_1.default.create(monitoring).then(fleet => {
                maintain_model_1.default.create(monitoring).then(() => {
                    let info = transporter.sendMail(message, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message sent: %s' + info.messageId);
                    });
                    console.log('Fleet in Maintainance Also...');
                });
                return res.json(fleet);
            }).catch(err => {
                return res.status(500).send(err.message);
            });
        }
        else {
            let fleet = await monitoring_model_1.default.create(monitoring).then(fleet => {
                return res.json(fleet);
            }).catch(err => {
                return res.status(500).send(err.message);
            });
        }
    }
    ;
    static async reveal(req, res) {
        let fleets = await monitoring_model_1.default.findAll().then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    ;
    static async revealOne(req, res) {
        let fleetnumber = req.params.fleetNumber;
        let fleet = await monitoring_model_1.default.findAll({ where: { fleetFleetNumber: fleetnumber } })
            .then(fleet => {
            if (!fleet) {
                return res.status(404).send('Fleet not found');
            }
            else {
                return res.json(fleet);
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    ;
    static async alter(req, res) {
        return res.json({
            messege: 'Update Route...'
        });
    }
    ;
    static async remove(req, res) {
        let id = req.params.id;
        let fleet = await monitoring_model_1.default.destroy({ where: { id: id } })
            .then(fleet => {
            res.send(`Fleet with id of ${id} is deleted`);
        })
            .catch(err => {
            return res.status(500).send(err.message);
        });
    }
    ;
}
exports.MonitoringController = MonitoringController;
