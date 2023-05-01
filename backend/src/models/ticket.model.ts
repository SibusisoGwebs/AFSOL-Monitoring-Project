import { DataTypes } from "sequelize";
import {sequelize} from "./main";

const Ticket = sequelize.define('ticket', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    ticket: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: false,});

export default Ticket;