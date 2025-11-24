import { WorkdayModel } from "../models/employees-model";
import db from "../db/db";

export async function getWDRepo(
  page: number,
  limit: number,
  orderby: string
): Promise<WorkdayModel[]> {
  const offset = (page - 1) * limit;
  return await db<WorkdayModel>("app.HRGT")
    .select("*")
    .orderByRaw(orderby)
    .offset(offset)
    .limit(limit);
}

export async function getConcurRepo(page: number, limit: number, orderby: string) {
  const offset = (page - 1) * limit;
  return await db("app.ConcurTravel")
    .select("*")
    .orderByRaw(orderby)
    .offset(offset)
    .limit(limit);
}
