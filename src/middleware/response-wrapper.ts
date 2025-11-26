import { NextFunction, Request, Response } from "express";


export function responseWrapper(req: Request, res: Response, next: NextFunction){
    const originalJson = res.json;
    
    res.json = function (data: any) {
        const wrappedResponse = {
            successs: res.statusCode < 400,
            messsage: req.messages || [],
            data
        }

        return originalJson.call(this, wrappedResponse);
    }

    next();
}