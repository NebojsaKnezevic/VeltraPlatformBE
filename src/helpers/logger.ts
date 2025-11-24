import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    // winston.format.json(),
    winston.format.printf(({ timestamp, level, status, message, details, ...meta }) => {
      return `${timestamp} [${level}]: StatusCode: ${status} Details: ${details} Stack: ${message} ${
        Object.keys(meta).length ? JSON.stringify(meta) : ""
      }`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});
