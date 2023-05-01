import { DataTypes, Sequelize } from "sequelize";
import { UniqueTicketNumber } from "../functions/ticket.function";
import {sequelize} from "./main";

const Schedule = sequelize.define('schedules', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
        
    },
    ticket: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    depot: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: false});

export default Schedule;