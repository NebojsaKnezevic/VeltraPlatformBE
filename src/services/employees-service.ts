import { WorkdayModel } from "models/employees-model";
import { getConcurRepo, getWDRepo } from "../repository/employees-repository";

export async function getWDService(page: number, limit: number, orderby: string): Promise<WorkdayModel[]> {
  try {
    return await getWDRepo(page,limit, orderby);
  } catch (error) {
    console.error("Failed to fetch Workday from db:", error);
    throw error;
  }
}

export async function getConcurService(page: number, limit: number, orderby: string){
  try {
    return await getConcurRepo(page, limit, orderby);
  } catch (error) {
    console.error("Failed to fetch Concur from db:", error);
    throw error;
  }
}
