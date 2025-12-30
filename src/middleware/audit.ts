import { CreateAuditLogDto } from "../dtos/audit";
import { Request, Response, NextFunction } from "express";
import { logger } from "../helpers/logger";
import { auditRepo } from "../repository/audit-repository";

export async function audit(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on("finish", async () => {
    const auditLog: CreateAuditLogDto = {
      // pageName: "",
      userName: req.user.name,
      userEmail: req.user.email,
      httpMethod: req.method,
      statusCode: res.statusCode,
      durationMs: Date.now() - start,
      path: req.originalUrl,
      logTimestamp: new Date(),
    };

    try {
      await auditRepo(auditLog);
    } catch (error) {
      console.log(error);
      // throw new CustomError("Failed to insert audit in database, table PBI.app.Logs");
      logger.error({
        message: "Failed to insert audit in database, table PBI.app.Logs",
        stack: error instanceof Error ? error.stack : undefined,
      });
    }
  });

  next();
}
