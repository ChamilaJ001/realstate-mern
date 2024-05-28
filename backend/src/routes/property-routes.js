import { Router } from "express";
import {
  addProperties,
  getAllProperties,
  getPropertyByCategory,
  getPropertyById,
  getPropertyByLatest,
  getPropertyByLocation,
  getPropertyByType,
} from "../controllers/property-controller.js";
import uploadMiddleware from "../../middlewares/uploadMiddleware.js";

const propertyRoutes = Router();
propertyRoutes.post("/add-property", uploadMiddleware, addProperties);
propertyRoutes.get("/", getAllProperties);
propertyRoutes.get("/get-Property/:property_id", getPropertyById);
propertyRoutes.get("/get-property-by-type", getPropertyByType);
propertyRoutes.get("/get-property-by-city", getPropertyByLocation);
propertyRoutes.get("/get-property-by-category", getPropertyByCategory);
propertyRoutes.get("/get-property-by-latest", getPropertyByLatest);

export default propertyRoutes;
