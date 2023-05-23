"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueTicketNumber = void 0;
const ticket_model_1 = __importDefault(require("../models/ticket.model"));
const videoTicket_model_1 = __importDefault(require("../models/videoTicket.model"));
class UniqueTicketNumber {
    static async ticket(req, res) {
        let ticketNumber = 5000;
        let count = await ticket_model_1.default.count().then(data => {
            let it = 'GABS' + (ticketNumber + data);
            return res.json({ ValueOfCount: it });
        });
    }
    static async ticketVideo(req, res) {
        let ticketNumber = 8000;
        let count = await videoTicket_model_1.default.count().then(data => {
            let tic = 'VF' + (ticketNumber + data);
            return res.json({ valueOfCount: tic });
        });
    }
}
exports.UniqueTicketNumber = UniqueTicketNumber;
