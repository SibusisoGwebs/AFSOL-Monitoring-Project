"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const main_1 = require("./main");
const Fleet = main_1.sequelize.define('fleets', {
    fleetNumber: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    depot: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dateCheck: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.fn('NOW'),
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'assets/GABS_Bus.jpg',
        allowNull: false
    },
    numberofMaintainance: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    }
}, { timestamps: false });
exports.default = Fleet;
