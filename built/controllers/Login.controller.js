"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sampleData_1 = require("./sampleData");
class Login {
    static async authenticated(req, res) {
        let logins = req.body;
        let user = await sampleData_1.sample_users.find(user => user.email === logins.email && user.password === logins.password);
        if (user) {
            res.send(generateTokenRes(user));
        }
        else {
            res.status(400).send("User not registered or email and password are incorrect!");
        }
    }
}
exports.Login = Login;
function generateTokenRes(user) {
    const token = jsonwebtoken_1.default.sign({
        email: user.email, isAdmin: user.isAdmin
    }, 'SomeRandomKey', {
        expiresIn: "30d"
    });
    user.token = token;
    return user;
}
