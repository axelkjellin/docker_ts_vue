import {createConnection} from 'typeorm'

createConnection().then(() => console.log('Successful connected on MONGO'))