"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const main_1 = require("./main");
const HVideoFootage = main_1.sequelize.define('historyVideoFootage', {
    Vticket: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    requestedBy: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    busRegistration: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fleetNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dateRequest: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dateOfFootage: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    timePeriod: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false,
    createdAt: false,
    updatedAt: false });
exports.default = HVideoFootage;
