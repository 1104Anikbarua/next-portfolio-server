import express from "../../utlis/express.utlis";
import { projectControllers } from "./project.controller";

const router = express.Router();

router.post("/create-project", projectControllers.createProject);
router.patch("/set-project/:id", projectControllers.setProject);
router.delete("/remove-project/:id", projectControllers.removeProject);
router.get("/", projectControllers.getProjects);

export const projectRoutes = router;
