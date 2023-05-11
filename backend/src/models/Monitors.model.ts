import { Sequelize, DataTypes } from "sequelize";
import { sequelize} from "./main";

const Monitors = sequelize.define('monitors', {
    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    depot: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

export default Monitors;