import { Router } from "express";
import personRouter from "./people.route";

const indexRouter = Router();

indexRouter.use(personRouter);

export default indexRouter;