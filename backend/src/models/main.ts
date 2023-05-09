import { Sequelize } from 'sequelize';
import { database } from "../config/dbConfig";
import dotenv from 'dotenv';
dotenv.config();


const sequelize: Sequelize = new Sequelize(
    process.env.DB!,
    process.env.USER!,
    process.env.PASSWORD, {
        timezone: '+02:00',
        host: process.env.HOST,
        dialect: 'mysql',
        // port: 5432,
        dialectOptions: {
            useUTC: true, //for reading from database
            dateStrings: true,
            typeCast: true
      },
    }
);

export {sequelize};



