"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const logins_model_1 = __importDefault(require("../models/logins.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginController {
    static async create(req, res) {
        let user = req.body;
        let fleet = await logins_model_1.default.create(user).then(fleet => {
            return res.json(fleet);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async reveal(req, res) {
        let fleets = await logins_model_1.default.findAll().then(fleets => {
            return res.json(fleets);
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async revealOne(req, res) {
        let fleetnumber = req.params.fleetNumber;
        let fleet = await logins_model_1.default.findByPk(fleetnumber)
            .then(fleet => {
            if (!fleet) {
                return res.status(404).send('Fleet not found');
            }
            else {
                return res.json(fleet);
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async alter(req, res) {
        return res.json({
            messege: 'Update Route...'
        });
    }
    static async remove(req, res) {
        let fleetPk = req.params.fleetNumber;
        let fleet = await logins_model_1.default.destroy({ where: { fleetNumber: fleetPk } })
            .then(fleet => {
            res.send(`Fleet ${fleetPk}`);
        })
            .catch(err => {
            return res.status(500).send(err.message);
        });
    }
    static async authenticated(req, res) {
        let { email, password } = req.body;
        let default_user = {
            name: process.env.EMAIL,
            email: process.env.EMAIL,
            passwords: process.env.EMAIL,
            confirmPasswords: process.env.EMAIL,
            isAdmin: true
        };
        let userA = await logins_model_1.default.findOne({ where: { email: email } }).then(user => {
            if (email == process.env.EMAIL && password == process.env.PASS) {
                res.send(generateTokenRes(default_user));
            }
            else if (user) {
                res.send(generateTokenRes(user));
            }
            else {
                res.status(400).send("Email or Password are incorrect!");
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        });
        // let user = await sample_users.find(user => user.email === email && user.password === password)
        // if(user){
        //     res.send(generateTokenRes(user));
        // }else{
        //     res.status(400).send("Email or Password are incorrect!");
        // }
    }
}
exports.LoginController = LoginController;
function generateTokenRes(user) {
    const token = jsonwebtoken_1.default.sign({
        email: user.email, isAdmin: user.isAdmin
    }, 'SomeRandomKey', {
        expiresIn: "30d"
    });
    user.token = token;
    return user;
}
