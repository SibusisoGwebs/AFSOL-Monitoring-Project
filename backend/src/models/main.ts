import { Sequelize } from 'sequelize';
import { database } from "../config/dbConfig";
import dotenv from 'dotenv';
dotenv.config();


const sequelize: Sequelize = new Sequelize(
    database.db,
    database.user,
    database.password,
    {
        timezone: '+02:00',
        host: database.host,
        dialect: 'postgres',
        port: 3306,
        dialectOptions: {
            useUTC: true, //for reading from database
            dateStrings: true,
            typeCast: true
      },
    }
);

export {sequelize};



