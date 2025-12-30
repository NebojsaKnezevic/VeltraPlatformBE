import { WorkdayModel } from "../models/employees-model";
import db from "../db/db";
import { IConcurModel } from "models/concur-model";
import { IHrgtModel } from "models/hrgt-model";
import { IHRGTdwModel } from "models/hrgtdw-model";
import { IFilter } from "models/filter-model";

export async function getHrgtRepo(
  page: number,
  limit: number,
  orderby: string,
  filter: IFilter
): Promise<IHrgtModel[]> {
  const offset = (page - 1) * limit;
  const query = db<IHrgtModel>("app.HRGT").select("*");

  for (let key in filter) {
    const value = filter[key as keyof IFilter];
    if (value) query.where(key, "like", `%${value}%`);
  }

  if (!orderby) orderby = "geid";

  query.orderByRaw(orderby).offset(offset).limit(limit);

  return await query;
}

export async function getConcurRepo(
  page: number,
  limit: number,
  orderby: string,
  filter: IFilter
): Promise<IConcurModel[]> {
  const offset = (page - 1) * limit;
  const query = db<IConcurModel>("app.ConcurTravel").select("*");

  for (let key in filter) {
    const value = filter[key as keyof IFilter];
    if (value) query.where(key, "like", `%${value}%`);
  }

  if (!orderby) orderby = "geid";

  query.orderByRaw(orderby).offset(offset).limit(limit);

  return await query;
}

export async function getHrgtDWRepo(filter: IFilter): Promise<IHRGTdwModel[]> {
  const jsonFilter = JSON.stringify(filter);
  // console.log(jsonFilter)
  const result = db.raw("EXEC app.sp_GetWorkdayDW @FilterJson = ?", [
    jsonFilter,
  ]);
  return await result;
}
