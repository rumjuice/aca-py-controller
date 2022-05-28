import { Router } from "express";
import topicRouter from "./Topic.router";

const baseRouter = Router();

// Setup routers
baseRouter.use("/topic", topicRouter);

export default baseRouter;
