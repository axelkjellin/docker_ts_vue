import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import { getMongoRepository } from "typeorm";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

class UserController {
    async authenticate(req: Request, res: Response) {
        const repository = getMongoRepository(User)
        const { email, password} = req.body

        const user = await repository.findOne({ where: { email: {$eq: email} }})
        
        if(!user) {
            return res.sendStatus(401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword) {
            return res.sendStatus(401)
        }

        const token = jwt.sign({id: user.id}, 'secret', {expiresIn: '1d'})
        return res.json({
            user,
            token
        })
    }
}

export default new UserController();