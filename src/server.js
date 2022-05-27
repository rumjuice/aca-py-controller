import express from "express";
import routes from "./routes";

// Initialize express
const app = express();

//#region Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//#endregion

//#region API routes
app.use(routes);

export default app;
