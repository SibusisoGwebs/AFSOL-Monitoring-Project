"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databa = exports.database = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.database = {
    host: 'localhost',
    user: 'root',
    password: 'Sibusiso@98',
    db: 'monitoring_database',
    dialect: 'mysql',
    dialectOptions: {
        useUTC: false,
    },
    timezone: '+02:00'
};
// export const database = {
//     host: process.env.HOST || '192.168.10.253',
//     user: process.env.USER || 'afsol_connector',
//     password: process.env.PASSWORD || 'afsol@afsol98',
//     db: process.env.DB || 'monitoring_database',
//     dialect: process.env.DIALECT || 'mysql',
//     dialectOptions: {
//         useUTC: false,
//     },
//     timezone: '+02:00'
// }
exports.databa = {
    host: 'localhost',
    user: 'root',
    password: 'Sibusiso@98',
    db: 'monitoring_database',
    dialect: 'mysql',
    dialectOptions: {
        useUTC: false,
    },
    timezone: '+02:00'
};
