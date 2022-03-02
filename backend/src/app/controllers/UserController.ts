import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import { getMongoRepository } from "typeorm";

class UserController {
    index(req: Request, res: Response) {
        return res.send({userID: req.userId})
    }

    async register(req: Request, res: Response) {
        const { email, password, passwordConfirmation} = req.body

        const repository = getMongoRepository(User)
        const userExist = await repository.findOne({ where:{ email: { $eq: email } }})

        if(userExist || password != passwordConfirmation) {
            return res.send(403)
        }

        const user = repository.create({ email, password})

        try {
            await repository.save(user)
            return res.json(user)
        } catch (error) {
            return res.json(error)            
        }
    }
}

export default new UserController();