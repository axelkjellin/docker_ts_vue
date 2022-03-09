import "reflect-metadata";
import express from 'express';
import cors from 'cors';

import './database/connect.ts'
import routes from './routes';

const app = express();

app.use(cors())
app.use(express.json())

app.use(routes)
const porta = 3000;
app.listen(porta, () => console.log(`rodando... na porta ${porta}`))