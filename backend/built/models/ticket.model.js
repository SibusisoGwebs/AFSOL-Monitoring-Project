"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const main_1 = require("./main");
const Ticket = main_1.sequelize.define('ticket', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    ticket: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false, });
exports.default = Ticket;
