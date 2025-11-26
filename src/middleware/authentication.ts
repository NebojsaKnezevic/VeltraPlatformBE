import { CustomError } from "../errors/errors";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { UserModel } from "../models/user-model";

export async function jwtAuth(req: Request, res: Response, next: NextFunction) {
  const cookie = req.cookies.jsonTokenCustom;
  if (!cookie) throw new CustomError("Cookie is missing");

  const secret = process.env.JWT_SECRET;
  if (!secret) throw new CustomError("JWT secret key is missing from env");

  const user = jwt.verify(cookie, secret) ;

  res.cookie("jsonTokenCustom", cookie, {
    httpOnly: true,
    maxAge: 5 * 60 * 1000, 
  });

  req.user = user as UserModel;
//   console.log('middleware, ', user)

  next();
}

// export function requireRole(role: string) {
//   return (req: any, res: any, next: any) => {
//     if (!req.user) return res.status(401).json({ message: "Unauthorized" });

//     if (req.user.role !== role)
//       return res.status(403).json({ message: "Forbidden" });

//     next();
//   };
// }

