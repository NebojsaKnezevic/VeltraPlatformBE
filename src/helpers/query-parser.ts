import { Request } from "express";
import { IFilter } from "../models/filter-model";

export function parseCommonQueryParams(req: Request) {
  const q = req.query;
  const pagination = {
    page: Number(q.page) || 1,
    limit: Number(q.limit) || 20,
    orderby: (q.orderby as string) || "GEID",
  };

  const filter: IFilter = {
    geid: q.geid as string,
    firstName: q.firstName as string,
    lastName: q.lastName as string,
    email: q.email as string,
    country: q.country as string,
    payroll: q.payroll as string,
  };

  return {...pagination, filter}
}
