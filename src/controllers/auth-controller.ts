import jwt from "jsonwebtoken";
import { CreateUserDto } from "../dtos/create-user";
import { NextFunction, Request, Response } from "express";
import { loginService, registerService } from "../services/auth-service";
import { CustomError } from "../errors/errors";
import { MessageType } from "../models/api-response";
import { UserModel } from "../models/user-model";

export async function registerController(
  req: Request,
  res: Response
): Promise<Response> {
  const user: CreateUserDto = req.body;
  const result = await registerService(user);
  return res.status(201).json(result);
}

export async function loginController(
  req: Request,
  res: Response
): Promise<Response> {
  const { email, password } = req.body;
  const [user, token]: [UserModel, string] = await loginService(
    email,
    password
  );

  res.cookie("jsonTokenCustom", token, {
    httpOnly: true,
    // secure: true, Samo preko HTTPS
    maxAge: 5 * 60 * 1000,
    sameSite: "lax", // za localhost cross-origin
    secure: false, // za localhost
  });

  req.addMessage({
    type: MessageType.SUCCESS,
    msg: `Welcome ${user.name}! You have logged in successfully!`,
  });

  return res.status(200).json(user);
}

export async function silentAuthController(
  req: Request,
  res: Response
): Promise<Response> {
  const cookie = req.cookies.jsonTokenCustom;
  const secret = process.env.JWT_SECRET;

  if (!secret) throw new CustomError("Server configuration error", 500);
  if (!cookie) throw new CustomError("No session found", 401);

  try {
    const user = jwt.verify(cookie, secret);
    return res.status(200).json(user as UserModel);
  } catch (err) {
    throw new CustomError("Invalid session", 401);
  }
}
