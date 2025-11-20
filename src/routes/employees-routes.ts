import { getConcur, getWorkday } from '../controllers/employees-controller';
import express, { Router } from 'express';


export default function workdayRouter(router: Router){
    router.get("/workday", getWorkday);
    router.get("/concur", getConcur);
}