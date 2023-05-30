"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const main_1 = require("./main");
const Login = main_1.sequelize.define('user_login', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false
    },
    passwords: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isAlphanumeric: true,
            min: 8,
        },
        allowNull: false
    },
    confirmPasswords: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isAlphanumeric: true,
            min: 8,
        },
        allowNull: false
    },
    isAdmin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, { timestamps: false });
exports.default = Login;
