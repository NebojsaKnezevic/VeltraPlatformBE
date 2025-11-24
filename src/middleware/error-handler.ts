import { Request, Response, NextFunction } from "express";
import { logger } from "../helpers/logger";
import { CustomError, NotFoundError, ValidationError } from "../errors/errors";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let status = 500;
  let message = "Internal Server Error";
  let details = "";


  if (err instanceof ValidationError) {
    status = err.code || 500;
    message = err.message;
    details = err.details || "";
  } else if (err instanceof NotFoundError) {
    status = err.code || 500;
    message = err.message;
    details = `Resource: ${err.details}`;
  } else if (err instanceof CustomError) {
    status = err.code || 500;
    message = err.message;
     details = err.details || "";
  } else if (err instanceof Error) {
    message = err.message;
  } else {
    message = "THIS IS DEVELOPERS MISTAKE: Somewhere in the source code, something has been thrown that is not an instance of Error";
  }

  logger.error({
    status,
    message,
    details,
    stack: err instanceof Error ? err.stack : undefined,
  });

  res.status(status).json({  
    status,
    message,
    details, 
  });
}
