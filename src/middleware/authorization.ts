import { CustomError } from "../errors/errors";
import { Request, Response, NextFunction } from "express";

export function jwtRole(roles: string[]){
    return (req: Request, res: Response, next: NextFunction) => {

        if(roles.length === 0) 
            throw new CustomError("Roles parametar can't be an empty array.");

        if (!req.user) 
            throw new CustomError("Unauthorized", 401);

        if(req.user.roles.length === 0) 
            throw new CustomError("Unauthorized", 401);

        if(!roles.some(x => req.user.roles.map(x => x.toLowerCase()).includes(x.toLowerCase())))
            throw new CustomError("Forbidden", 403);

        next();
    }
}