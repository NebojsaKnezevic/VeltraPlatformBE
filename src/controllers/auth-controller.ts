
import { CreateUserDto } from "../dtos/create-user";
import { NextFunction, Request, Response } from "express";
import { loginService, registerService } from "../services/auth-service";

export async function registerController(req: Request, res: Response): Promise<Response> {
    const user: CreateUserDto = req.body; 
    const result = await registerService(user);
    return res.status(201).json(result);
}

export async function loginController(req: Request, res: Response): Promise<Response>{
    const {email, password} = req.body;

    const result = await loginService(email, password);

    return res.status(200).json(result);
}
