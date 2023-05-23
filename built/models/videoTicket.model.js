"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const main_1 = require("./main");
const VideoTicket = main_1.sequelize.define('videoTicket', {
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
        allowNull: true
    }
}, { timestamps: false,
    createdAt: true,
    updatedAt: false });
exports.default = VideoTicket;
