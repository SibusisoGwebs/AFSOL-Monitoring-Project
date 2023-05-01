import { DataTypes, Sequelize } from "sequelize";
import {sequelize} from "./main";

const Techs = sequelize.define('technician', {
    ticket: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    techname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resolution: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: false});

export default Techs;