import { DataTypes, Sequelize } from "sequelize";
import {sequelize} from "./main";

const Fleet = sequelize.define('fleets', {
    fleetNumber: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    depot: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateCheck: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: 'assets/GABS_Bus.jpg',
        allowNull: false
    },
    numberofMaintainance: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {timestamps: false})

export default Fleet;