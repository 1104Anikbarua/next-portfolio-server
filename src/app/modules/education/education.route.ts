import express from "../../utlis/express.utlis";
import { educationController } from "./education.controller";

const router = express.Router();
router.patch("/set-education/:id", educationController.setEducation);
router.delete("/remove-education/:id", educationController.deleteEducation);
router.post("/create-education", educationController.createEducation);
router.get("/", educationController.getEducations);

export const educationRoutes = router;
