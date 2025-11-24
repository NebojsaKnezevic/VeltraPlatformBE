
import { asyncHandler } from '../helpers/async-handler';
import { getConcurController, getWorkdayController } from '../controllers/employees-controller';
import { Router } from 'express';



export default function workdayRouter(router: Router){
    router.get("/workday", asyncHandler(getWorkdayController));
    router.get("/concur", asyncHandler(getConcurController));
}