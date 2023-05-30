"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dbConfig_1 = require("../config/dbConfig");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize(dbConfig_1.database.db, dbConfig_1.database.user, dbConfig_1.database.password, {
    timezone: '+02:00',
    host: dbConfig_1.database.host,
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        useUTC: true,
        dateStrings: true,
        typeCast: true
    },
});
exports.sequelize = sequelize;
