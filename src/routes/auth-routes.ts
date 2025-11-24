import { loginController, registerController } from '../controllers/auth-controller';
import { CreateUserSchema } from '../dtos/create-user';
import { Router } from 'express';
import { validateBody } from '../middleware/validate-body';
import { asyncHandler } from '../helpers/async-handler';

export default function authRouter(router: Router){
    router.post("/register", validateBody(CreateUserSchema), asyncHandler(registerController));
    router.post("/login", asyncHandler(loginController));
}


