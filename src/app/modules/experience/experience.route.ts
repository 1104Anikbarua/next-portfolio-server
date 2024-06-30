import express from "../../utlis/express.utlis";
import { experienceControllers } from "./experience.controller";

const router = express.Router();
router.patch("/set-experience/:id", experienceControllers.setExperience);
router.delete("/remove-experience/:id", experienceControllers.removeExperience);
router.post("/create-experience", experienceControllers.createExperience);
router.get("/", experienceControllers.getExperiences);

export const experienceRoutes = router;
