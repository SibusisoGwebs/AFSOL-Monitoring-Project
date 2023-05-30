"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const main_1 = require("./main");
const Monitors = main_1.sequelize.define('monitors', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    depot: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});
exports.default = Monitors;
