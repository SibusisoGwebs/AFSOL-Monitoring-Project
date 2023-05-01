import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { sample_users } from "./sampleData";

export class Login{


    public static async authenticated(req: Request, res: Response){
        let logins = req.body;
        let user = await sample_users.find(user => user.email === logins.email && user.password === logins.password)

        if(user){
            res.send(generateTokenRes(user));
        }else{
            res.status(400).send("User not registered or email and password are incorrect!");
        }
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

