import express from "express";
import type { Request, Response, NextFunction } from "express";

import { HttpError } from "http-errors";
import logger from "./config/logger.ts";
import authRouter from "./routes/auth.ts";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to auth service");
});

app.use("/auth", authRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        type: err.name,
        message: err.message,
        path: "",
        location: "",
    });
});
export default app;
