import { DataTypes, Sequelize } from "sequelize";
import {sequelize} from "./main";

const HVideoFootage = sequelize.define('historyVideoFootage', {
    Vticket:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    requestedBy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    busRegistration:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fleetNumber:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dateRequest:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfFootage:{
        type: DataTypes.STRING,
        allowNull: false
    },
    timePeriod:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: false,
    createdAt: false,
    updatedAt: false});

export default HVideoFootage;