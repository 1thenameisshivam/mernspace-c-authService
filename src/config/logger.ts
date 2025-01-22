import winston from "winston";
import { NODE_ENV } from "./index.ts";
const logger = winston.createLogger({
    level: "info",
    defaultMeta: { service: "auth-service" },
    transports: [
        new winston.transports.File({
            level: "info",
            dirname: "logs",
            filename: "combile.logs",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.json(),
            ),
            silent: NODE_ENV == "development",
        }),

        new winston.transports.File({
            level: "error",
            dirname: "logs",
            filename: "error.logs",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.json(),
            ),
            silent: NODE_ENV == "development",
        }),

        new winston.transports.Console({
            level: "info",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.json(),
            ),
            silent: NODE_ENV == "production",
        }),
    ],
});

export default logger;
