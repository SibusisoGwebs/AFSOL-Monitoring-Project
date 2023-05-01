import { Router } from "express";
import { HomeReport } from "../functions/HomeReport.function";

const routerFuc: Router = Router();

routerFuc.get('/DepotCout', HomeReport.TotalMaintainanceByPriory)


export default routerFuc;