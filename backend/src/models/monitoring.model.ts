import { DataTypes, Sequelize } from "sequelize";
import {sequelize} from "./main";


const Monitoring =  sequelize.define('monitoring', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // depot: {
    //     type: DataTypes.STRING,
    // },
    datecheck: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {timestamps: false});


export default Monitoring;