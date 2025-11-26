import { NextFunction, Request, Response } from "express";
import { Message } from "../models/api-response";

export function messageCollector(req: Request, res: Response, next: NextFunction){
 req.messages = [];

 req.addMessage = (msg: Message) => {
    req.messages.push(msg);
 }

 next();
}