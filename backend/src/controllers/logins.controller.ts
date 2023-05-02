import { Request, Response } from "express";
import { Sequelize, where } from "sequelize";
import { now } from "sequelize/types/utils";
import Fleet from "../models/fleet.model";
import { sequelize } from "../models/main";
import Login from "../models/logins.model";
import { sample_users } from "./sampleData";
import jwt from "jsonwebtoken";

export class LoginController{

    public static async create(req: Request, res: Response){
        let user = req.body
        let fleet = await Login.create(user).then(fleet => {
           return res.json(fleet);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async reveal(req: Request, res: Response){
        let fleets = await Login.findAll().then(fleets => {
           return res.json(fleets);
        }).catch(err => {
           return res.status(500).send(err.message)
        });
    }

    public static async revealOne(req: Request, res: Response){
        let fleetnumber = req.params.fleetNumber
        let fleet = await Login.findByPk(fleetnumber)
        .then(fleet => {
            if(!fleet){
                return res.status(404).send('Fleet not found');
            }else{
                return res.json(fleet);
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        })
    }

    public static async alter(req: Request, res: Response){
        return res.json({
            messege: 'Update Route...'
        });

    }

    public static async remove(req: Request, res: Response){
        let fleetPk = req.params.fleetNumber
        let fleet = await Login.destroy({where: {fleetNumber: fleetPk}})
        .then(fleet => {
            res.send(`Fleet ${fleetPk}`);
        })
        .catch(err => {
            return res.status(500).send(err.message);
        })
    }

    public static async authenticated(req: Request, res: Response){
        let {email, password} = req.body
        let default_user = {
            name: process.env.EMAIL,
            email: process.env.EMAIL,
            passwords: process.env.EMAIL,
            confirmPasswords: process.env.EMAIL,
            isAdmin: true
        }
        let userA = await Login.findOne({where: {email: email}}).then(user => {
            if(email == process.env.EMAIL && password == process.env.PASS){
                res.send(generateTokenRes(default_user));
            }
            else if(user){
                res.send(generateTokenRes(user));
            }else{
                res.status(400).send("Email or Password are incorrect!");
            }
        }).catch(err => {
            return res.status(500).send(err.message);
        })

        // let user = await sample_users.find(user => user.email === email && user.password === password)

        // if(user){
        //     res.send(generateTokenRes(user));
        // }else{
        //     res.status(400).send("Email or Password are incorrect!");
        // }
    }
}

function generateTokenRes(user: any): any {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, 'SomeRandomKey', {
       expiresIn: "30d" 
    });

    user.token = token;
    return user;
}