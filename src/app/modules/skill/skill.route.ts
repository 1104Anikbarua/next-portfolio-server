import express from "../../utlis/express.utlis";
import { skillControllers } from "./skill.controller";

const router = express.Router();

router.post("/create-skill", skillControllers.createSkill);
router.patch("/set-skill/:id", skillControllers.setSkill);
router.delete("/remove-skill/:id", skillControllers.removeSkill);
router.get("/", skillControllers.getSkills);

export const skillRoutes = router;
