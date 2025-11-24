import { Request, Response } from "express";
import { getConcurService, getWDService } from "../services/employees-service";

export async function getWorkdayController(req:Request, res:Response){
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const orderby = (req.query.orderby as string) || "GEID";
      try {
        const data = await getWDService(page,limit,orderby);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Failed to get Workday data:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export async function getConcurController(req:Request, res:Response){
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const orderby = (req.query.orderby as string) || "GEID";
    try {
        const data = await getConcurService(page, limit, orderby);
        return res.status(200).json(data);

    } catch (error) {
        console.error("Failed to get Concur data: ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}