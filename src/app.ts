import * as bodyParser from 'body-parser';
import express from 'express';
import router from './routes/';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// define api routes
app.use('/api', router)

export default app;
