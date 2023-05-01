import { Sequelize } from 'sequelize';
import { database } from "../config/dbConfig";
import dotenv from 'dotenv';
dotenv.config();


const sequelize: Sequelize = new Sequelize(
    process.env.DB! || database.db,
    process.env.USER! || database.user,
    process.env.PASSWORD || database.password,
    {
        timezone: '+02:00',
        host: process.env.HOST || database.host,
        dialect: 'mysql',
        port: 3306,
        dialectOptions: {
            useUTC: true, //for reading from database
            dateStrings: true,
            typeCast: true
      },
    }
);

export {sequelize};



