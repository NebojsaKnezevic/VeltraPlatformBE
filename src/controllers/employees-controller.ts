import { Request, Response } from "express";
import { getConcurService, getWDService } from "../services/employees-service";
import { MessageType } from "../models/api-response";

export async function getWorkdayController(req:Request, res:Response){
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const orderby = (req.query.orderby as string) || "GEID";

    const data = await getWDService(page,limit,orderby);
    // req.addMessage({type: MessageType.SUCCESS, msg: 'Success message!'});
    return res.status(200).json(data);

}

export async function getConcurController(req:Request, res:Response){
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const orderby = (req.query.orderby as string) || "GEID";

    const data = await getConcurService(page, limit, orderby);
    return res.status(200).json(data);
}