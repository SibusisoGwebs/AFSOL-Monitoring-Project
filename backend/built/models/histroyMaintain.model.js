"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const main_1 = require("./main");
const MaintainHistory = main_1.sequelize.define("historymaintainance", {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            equals: 'Maintainance'
        }
    },
    priority: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    // depot: {
    //     type: DataTypes.STRING,
    // },
    datecheck: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.fn('NOW'),
        allowNull: false
    },
    comment: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    }
}, { timestamps: false });
exports.default = MaintainHistory;
