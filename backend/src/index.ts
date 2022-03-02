import "reflect-metadata";
import express from 'express';

import './database/connect.ts'
import routes from './routes';

const app = express();

app.use(express.json())
app.use(routes)

// app.post('/register', async (req, res) => {
//     console.log(req.body)
//     const user = new User();
//     user.email = req.body.email;
//     user.password = req.body.password;
//     user.passwordConfirmation = req.body.passwordConfirmation;

//     const manager = getMongoManager();
//     await manager.save(user);

//     return res.status(200).json(user)
// })

app.listen(3000, () => console.log('rodando...'))