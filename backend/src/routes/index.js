import { Router } from "express";
import userRoutes from "./user-routes.js";
import propertyRoutes from "./property-routes.js";

const appRouter = Router();

appRouter.use("/user", userRoutes); //domain/api/vi/user
appRouter.use("/property", propertyRoutes);

export default appRouter;
