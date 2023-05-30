"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const main_1 = require("./main");
const Techs = main_1.sequelize.define('technician', {
    ticket: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    techname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    resolution: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: false
});
exports.default = Techs;
