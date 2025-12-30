import { CreateAuditLogDto } from "../dtos/audit";
import db from "../db/db";

export async function auditRepo(audit: CreateAuditLogDto) {
  return await db("app.Audit").insert(audit);
}
