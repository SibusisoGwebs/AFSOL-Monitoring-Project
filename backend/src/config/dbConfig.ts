import dotenv from 'dotenv';
dotenv.config();

export const database = {
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'Sibusiso@98',
    db: process.env.DB || 'monitoring_database',
    dialect: process.env.DIALECT || 'mysql',
    dialectOptions: {
        useUTC: false,
    },
    timezone: '+02:00'
}

export const databas = {
    host: 'localhost',
    user: 'root',
    password: 'Sibusiso@98',
    db: 'monitoring_database',
    dialect: 'mysql',
    dialectOptions: {
        useUTC: false,
    },
    timezone: '+02:00'
}

