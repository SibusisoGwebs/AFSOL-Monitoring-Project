"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HomeReport_function_1 = require("../functions/HomeReport.function");
const routerFuc = (0, express_1.Router)();
routerFuc.get('/DepotCout', HomeReport_function_1.HomeReport.TotalMaintainanceByPriory);
exports.default = routerFuc;
