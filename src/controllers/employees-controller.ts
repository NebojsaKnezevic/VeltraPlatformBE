import { Request, Response } from "express";
import {
  getConcurService,
  getHrgtDwService,
  getHRGTService,
} from "../services/employees-service";
import { MessageType } from "../models/api-response";
import { IFilter } from "../models/filter-model";
import { parseCommonQueryParams } from "../helpers/query-parser";

export async function getHRGTController(req: Request, res: Response) {
  const { page, limit, orderby, filter } = parseCommonQueryParams(req);
  const data = await getHRGTService(page, limit, orderby, filter);
  // req.addMessage({type: MessageType.SUCCESS, msg: 'Success message!'});
  return res.status(200).json(data);
}

export async function getConcurController(req: Request, res: Response) {
  const { page, limit, orderby, filter } = parseCommonQueryParams(req);
  // const filter: IFilter = QueryParser.parseFilter<IFilter>(q);
  console.log(filter as IFilter);
  const data = await getConcurService(page, limit, orderby, filter);
  return res.status(200).json(data);
}

export async function getHrgtDwController(req: Request, res: Response) {
    const { page, limit, orderby, filter } = parseCommonQueryParams(req);
    const data = await getHrgtDwService(filter);
    return res.status(200).json(data);
}
