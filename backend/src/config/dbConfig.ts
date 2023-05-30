import dotenv from 'dotenv';
dotenv.config();

export const database = {
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

// export const database = {
//     host: process.env.HOST || '192.168.10.253',
//     user: process.env.USER || 'afsol_connector',
//     password: process.env.PASSWORD || 'afsol@afsol98',
//     db: process.env.DB || 'monitoring_database',
//     dialect: process.env.DIALECT || 'mysql',
//     dialectOptions: {
//         useUTC: false,
//     },
//     timezone: '+02:00'
// }

export const databa = {
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

