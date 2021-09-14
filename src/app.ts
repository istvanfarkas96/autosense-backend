import * as bodyParser from 'body-parser';
import express from 'express';
import router from './routes/';
import cors from 'cors';
import basicAuth from 'express-basic-auth'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(basicAuth({
    users: { 'admin': '123qwe' }
}))


// define api routes
app.use('/api', router)

export default app;
