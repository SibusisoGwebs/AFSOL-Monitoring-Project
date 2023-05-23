"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./routes/api"));
const main_1 = require("./models/main");
const fleet_model_1 = __importDefault(require("./models/fleet.model"));
const monitoring_model_1 = __importDefault(require("./models/monitoring.model"));
const maintain_model_1 = __importDefault(require("./models/maintain.model"));
const schedule_model_1 = __importDefault(require("./models/schedule.model"));
const tech_model_1 = __importDefault(require("./models/tech.model"));
const histroyMaintain_model_1 = __importDefault(require("./models/histroyMaintain.model"));
const functionAPI_1 = __importDefault(require("./routes/functionAPI"));
const TechsOnVideoFootage_model_1 = __importDefault(require("./models/TechsOnVideoFootage.model"));
const historyVideoFootage_model_1 = __importDefault(require("./models/historyVideoFootage.model"));
const videoTicket_model_1 = __importDefault(require("./models/videoTicket.model"));
const videofootage_model_1 = __importDefault(require("./models/videofootage.model"));
dotenv_1.default.config();
const tables = require('./models/fleet.model');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
//Middleware
app.use((0, cors_1.default)({
    credentials: true,
    origin: 'http://localhost:4200'
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
// app.get('*', (req, res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })
//Database Related
main_1.sequelize.authenticate().then(() => {
    console.log('Connected...');
}).catch(err => {
    console.log('Error' + err);
});
fleet_model_1.default.hasMany(monitoring_model_1.default);
fleet_model_1.default.hasOne(maintain_model_1.default);
fleet_model_1.default.hasMany(tech_model_1.default);
maintain_model_1.default.belongsTo(fleet_model_1.default);
maintain_model_1.default.hasOne(schedule_model_1.default);
tech_model_1.default.hasOne(histroyMaintain_model_1.default);
histroyMaintain_model_1.default.belongsTo(tech_model_1.default);
historyVideoFootage_model_1.default.hasOne(TechsOnVideoFootage_model_1.default);
TechsOnVideoFootage_model_1.default.belongsTo(historyVideoFootage_model_1.default);
videoTicket_model_1.default.hasOne(historyVideoFootage_model_1.default);
videoTicket_model_1.default.hasOne(videofootage_model_1.default);
main_1.sequelize.sync().then(() => {
    console.log('Sync Completed...');
}).catch((err) => {
    console.log(err);
});
//APIs Calling
app.use('/bureau', api_1.default);
app.use('/report', functionAPI_1.default);
app.get('/', (req, res) => {
    res.send('I love Life');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
