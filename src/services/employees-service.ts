import {
  getConcurRepo,
  getHrgtDWRepo,
  getHrgtRepo,
} from "../repository/employees-repository";
import { IHrgtModel } from "../models/hrgt-model";
import { IFilter } from "../models/filter-model";
import { IHRGTdwModel } from "../models/hrgtdw-model";
import { IConcurModel } from "../models/concur-model";

export async function getHRGTService(
  page: number,
  limit: number,
  orderby: string,
  filter: IFilter
): Promise<IHrgtModel[]> {
  return await getHrgtRepo(page, limit, orderby, filter);
}

export async function getConcurService(
  page: number,
  limit: number,
  orderby: string,
  filter: IFilter
): Promise<IConcurModel[]> {
  return await getConcurRepo(page, limit, orderby, filter);
}

export async function getHrgtDwService(filter: IFilter): Promise<IHRGTdwModel[]> {
  const result = await getHrgtDWRepo(filter);
  return result;
}
