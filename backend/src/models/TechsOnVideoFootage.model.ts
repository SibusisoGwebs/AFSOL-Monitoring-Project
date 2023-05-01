import { DataTypes, Sequelize } from "sequelize";
import {sequelize} from "./main";

const VideoFootageTech = sequelize.define('techsOnVideoFootage', {
    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    tecnician: {
        type: DataTypes.STRING,
        allowNull: false
    },
    depot:{
        type: DataTypes.STRING,
        allowNull: false
    },
    refNumber:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dateAndTime:{
        type: DataTypes.STRING,
        allowNull: false
    },
    available:{
        type: DataTypes.STRING,
        allowNull: false
    },
    downloadSuccess:{
        type: DataTypes.STRING,
        allowNull: false
    },
    delivered:{
        type: DataTypes.STRING,
        allowNull: false
    },
    formOfDelivery:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: false});

export default VideoFootageTech;