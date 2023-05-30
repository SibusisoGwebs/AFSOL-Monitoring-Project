"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const main_1 = require("./main");
const Schedule = main_1.sequelize.define('schedules', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    ticket: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    depot: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: false
});
exports.default = Schedule;
