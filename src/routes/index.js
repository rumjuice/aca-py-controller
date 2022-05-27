import { Router } from "express";
import topicsRouter from "./Topics.router";

const baseRouter = Router();

// Setup routers
baseRouter.use(topicsRouter);

export default baseRouter;
