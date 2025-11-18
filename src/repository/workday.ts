import db from "../db/db";

const tableName = "app.HRGT";
export async function GetWD(){
    return await db(tableName).select("*").limit(100);
}