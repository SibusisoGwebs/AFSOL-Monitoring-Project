import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors'
import router from './routes/api';
import { DataTypes, Sequelize } from 'sequelize';
import {sequelize} from './models/main';
import Fleet from './models/fleet.model';
import Monitoring from './models/monitoring.model';
import Maintain from './models/maintain.model';
import Schedule from './models/schedule.model';
import Techs from './models/tech.model';
import MaintainHistory from './models/histroyMaintain.model';
import Ticket from './models/ticket.model';
import routerFuc from './routes/functionAPI';
import VideoFootageTech from './models/TechsOnVideoFootage.model';
import HVideoFootage from './models/historyVideoFootage.model';
import VideoTicket from './models/videoTicket.model';
import VideoFootage from './models/videofootage.model';
import path from 'path';

dotenv.config();

const tables = require('./models/fleet.model');
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200'
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Database Related
sequelize.authenticate().then(() => {
    console.log('Connected...')
}).catch(err => {
    console.log('Error'+ err);
});

Fleet.hasMany(Monitoring);
Fleet.hasOne(Maintain);
Fleet.hasMany(Techs)
Maintain.belongsTo(Fleet);
Maintain.hasOne(Schedule);
Techs.hasOne(MaintainHistory);
MaintainHistory.belongsTo(Techs);
HVideoFootage.hasOne(VideoFootageTech);
VideoFootageTech.belongsTo(HVideoFootage);
VideoTicket.hasOne(HVideoFootage);
VideoTicket.hasOne(VideoFootage)

sequelize.sync().then(() => {
    console.log('Sync Completed...');
}).catch((err: any) => {
    console.log(err);
});

//APIs Calling
app.use('/bureau', router);
app.use('/report', routerFuc)
app.get('/', (req, res) => {
    res.send('I love Life');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});