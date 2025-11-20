import { WorkdayModel } from "models/employees-model";
import { getConcurRepository, getWDRepository } from "../repository/employees-repository";

export async function getWDService(page: number, limit: number, orderby: string): Promise<WorkdayModel[]> {
  try {
    return await getWDRepository(page,limit, orderby);
  } catch (error) {
    console.error("Failed to fetch Workday from db:", error);
    throw error;
  }
}

export async function getConcurService(page: number, limit: number, orderby: string){
  try {
    return await getConcurRepository(page, limit, orderby);
  } catch (error) {
    console.error("Failed to fetch Concur from db:", error);
    throw error;
  }
}
