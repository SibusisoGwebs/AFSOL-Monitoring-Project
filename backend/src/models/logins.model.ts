import { DataTypes, Sequelize } from "sequelize";
import {sequelize} from "./main";

const Login = sequelize.define('user_login', {
    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate:{
            isEmail: true,
        },
        allowNull: false
    },
    passwords:{
        type: DataTypes.STRING,
        validate: {
            isAlphanumeric: true,
            min: 8,
        },
        allowNull: false
    },
    confirmPasswords:{
        type: DataTypes.STRING,
        validate: {
            isAlphanumeric: true,
            min: 8,
        },
        allowNull: false
    },
    isAdmin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {timestamps: false});

export default Login