import express from 'express';
import workdayRouter from './employees-routes';

const myRouter = express.Router();


workdayRouter(myRouter);

export {myRouter}