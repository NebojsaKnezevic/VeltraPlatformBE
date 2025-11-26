export interface CreateAuditLogDto {
//   pageName?: string | null;
  userName: string;
  userEmail: string;
  httpMethod?: string | null;
  statusCode?: number | null;
  durationMs?: number | null;
  path?: string | null;
  logTimestamp?: Date;
}
