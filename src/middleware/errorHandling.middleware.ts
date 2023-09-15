import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { CustomError } from "../protocols";

export default function errorHandler(
    error: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
): Response {
    if (error.type === "not-found")
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    console.log(error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
}