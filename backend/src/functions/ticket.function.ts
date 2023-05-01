import Monitoring from "../models/monitoring.model";
import { Request, Response } from "express";
import MaintainHistory from "../models/histroyMaintain.model";
import Ticket from "../models/ticket.model";
import VideoTicket from "../models/videoTicket.model";

export class UniqueTicketNumber{
    
    public static async ticket(req: Request, res: Response){
        let ticketNumber: number = 5000;
        let count = await Ticket.count().then(data => {
            let it = 'GABS' + (ticketNumber + data)
            return res.json({ValueOfCount: it});
        })
    }

    public static async ticketVideo(req: Request, res: Response){
        let ticketNumber: number = 8000;
        let count = await VideoTicket.count().then(data => {
            let tic = 'VF' + (ticketNumber + data);
            return res.json({valueOfCount: tic})
        })
    }
}