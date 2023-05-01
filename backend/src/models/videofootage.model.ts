import { DataTypes, Sequelize } from "sequelize";
import {sequelize} from "./main";

const VideoFootage = sequelize.define('videoFootage', {
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
    createdAt: true,
    updatedAt: false});

export default VideoFootage;