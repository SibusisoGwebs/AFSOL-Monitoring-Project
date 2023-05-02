import dotenv from 'dotenv';
dotenv.config();

export const database = {
    host: process.env.HOST1 || 'eu-cdbr-west-03.cleardb.net',
    user: process.env.USER1 || 'b4c274b10602c4',
    password: process.env.PASSWORD1 || '3bee2234',
    db: process.env.DB1 || 'heroku_912c958da53c082',
    dialect: process.env.DIALECT1 || 'mysql',
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

