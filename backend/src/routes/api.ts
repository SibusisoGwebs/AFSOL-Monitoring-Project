import { Router } from "express";
import { FleetController } from "../controllers/Fleet.controller";
import { HistrotMaintainController } from "../controllers/HistroryMaintainance.controller";
import { LoginController } from "../controllers/logins.controller";
import { MaintainController } from "../controllers/maintain.controller";
import { MonitoringController } from "../controllers/Monitor.controller";
import { ScheduleController } from "../controllers/schedule.controller";
import { TechController } from "../controllers/tech.controller";
import { TicketController } from "../controllers/ticket.controller";
import { HomeReport } from "../functions/HomeReport.function";
import { ReportFuntions } from "../functions/report.functions";
import { UniqueTicketNumber } from "../functions/ticket.function";
import Maintain from "../models/maintain.model";
import { VideoFootageController } from "../controllers/videoFootage.controller";
import Login from "../models/logins.model";
import { VideoFootageHistoryController } from "../controllers/VideoFootageHistory.controller";

const router: Router = Router();

//Fleet Routes
router.post('/fleet/post', FleetController.create);
router.get('/fleet/fetchall', FleetController.reveal);
router.get('/fleet/fetchone/:fleetNo', FleetController.revealOne);
router.put('/fleet/update/:fleetNo', FleetController.alter);
router.delete('/fleet/delete/:fleetNo', FleetController.remove);
router.get('/fleet/fetchallMaintainance', FleetController.revealWithMaintainance);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Monitoring Routes
router.post('/monitoring/post', MonitoringController.create);
router.get('/monitoring/fetchall', MonitoringController.reveal);
router.get('/monitoring/fetchone/:fleetNumber', MonitoringController.revealOne);
router.put('/monitoring/update/:fleetNumber', MonitoringController.alter);
router.delete('/monitoring/delete/:fleetNumber', MonitoringController.remove);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Login Routes/////////////////////////////////////////////////////
router.post('/user/post', LoginController.create);
router.get('/user/fetchall', LoginController.reveal);
router.get('/user/fetchone', LoginController.revealOne);
router.put('/user/update', LoginController.alter);
router.delete('/user/delete', LoginController.remove);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Maintainance Route/////////////////////////////////////////////////////
// router.post('/maintainance/post', MonitoringController.create);
router.get('/maintainance/fetchall', MaintainController.reveal);
router.get('/maintainance/fetchone/:fleetNumber', MaintainController.revealOne);
router.put('/maintainance/update/:fleetNumber', MaintainController.alter);
router.delete('/maintainance/delete/:fleetNumber', MaintainController.remove);
router.get('/maintainance/fetchallFleet', MaintainController.revealWithFleet);
router.get('/maintainance/fetchoneFleet/:fleetNumber', MaintainController.revealOneFleet);
router.get('/maintainance/fetchone-scheduledFleet/:fleetNumber', MaintainController.OneFleetAndSchedule);
router.get('/maintainance/fetchAll-scheduledFleet', MaintainController.AllScheduledFleet);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Technician Routes/////////////////////////////////////////////////////
router.post('/technician-data/post', TechController.createTech);
router.get('/technician-data/fetchall', TechController.reveal);
router.get('/technician-data/fetchone/:ticket', TechController.revealOne);
router.get('/technician-maintainance/fetchall', TechController.allTechsWithMaintainance);
router.get('/filteredtechnician-maintainance/fetchone/:ticket', TechController.filteredTechsWithMaintainance);
router.post('/technician-Video-data/post', TechController.createTechOnVideo);
// router.put('/technician-data/update/:id', TechController.alter);
// router.delete('/technician-data/delete/:id', TechController.remove);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Schedule Routes/////////////////////////////////////////////////////
router.get('/schedule/fetchallSchedules', ScheduleController.revealAllSchedules);
router.post('/schedule/post', ScheduleController.create);
router.delete('/schedule/delete/:ticket', ScheduleController.remove);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Maintainance History Routes///////////////////////////////////////////
router.post('/maintainanceHistory/post', HistrotMaintainController.create);
router.get('/maintainanceHistory/fetchone/:ticket', HistrotMaintainController.revealOne);
// router.put('/maintainanceHistory/update/:fleetNumber', MaintainController.alter);
// router.delete('/maintainance/delete/:fleetNumber', MaintainController.remove);
router.get('/maintainanceHistory/fetchallFleet', HistrotMaintainController.allHistMaintainance);
router.get('/maintainanceHistory/fetchoneFleet/:ticket', HistrotMaintainController.filteredHistMaintainance);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/VideofootageHistory/post', VideoFootageHistoryController.create);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Function Router/////////////////////////////////////////////////////
router.get('/maintainance/count', UniqueTicketNumber.ticket);
router.get('/videofootage/ticket', UniqueTicketNumber.ticketVideo);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Ticket Routes/////////////////////////////////////////////////////
router.post('/ticket/post', TicketController.create);
router.post('/videoTicket/post', TicketController.createVTicket);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/reporting', ReportFuntions.TotalMaintainanceBy('status'));
router.get('/reporting/:status', ReportFuntions.TotalMaintainanceByStatus);
router.get('/DepotCout', HomeReport.TotalMaintainanceByPriory)


////////////////////////////////////////////Video Footage///////////////////////////////////////////////////////
router.post('/video-footage/post', VideoFootageController.create);
router.get('/video-footage/fetchall', VideoFootageController.reveal);
router.get('/video-footage/fetchone/:ticket', VideoFootageController.revealOne);
router.put('/video-footage/update/:ticket', VideoFootageController.alter);
router.delete('/video-footage/delete/:ticket', VideoFootageController.remove);
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////LogIn///////////////////////////////////////////////////////
router.post('/login-page', LoginController.authenticated)
export default router;