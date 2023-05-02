import dotenv from 'dotenv';
dotenv.config();

export const database = {
    host: process.env.HOST || 'eu-cdbr-west-03.cleardb.net',
    user: process.env.USER || 'b4c274b10602c4',
    password: process.env.PASSWORD || '3bee2234',
    db: process.env.DB || 'heroku_912c958da53c082',
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

