import express from 'express';
import workdayRouter from './employees-routes';
import authRouter from './auth-routes';

const myRouter = express.Router();


workdayRouter(myRouter);
authRouter(myRouter);

export {myRouter}