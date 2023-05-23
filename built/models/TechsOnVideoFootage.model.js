"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const main_1 = require("./main");
const VideoFootageTech = main_1.sequelize.define('techsOnVideoFootage', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    tecnician: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    depot: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    refNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dateAndTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    available: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    downloadSuccess: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    delivered: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    formOfDelivery: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });
exports.default = VideoFootageTech;
