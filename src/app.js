import express from 'express';
import morgan from 'morgan';
import TaskRouter from "./routes/task.routes";
//Initialization
const app = express();

//Database
import './database';

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/task',TaskRouter);


export default app;