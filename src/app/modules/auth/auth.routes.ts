import { auth } from "../../middleware/auth.middleware";
import express from "../../utlis/express.utlis";
import { authControllers } from "./auth.controller";

const router = express.Router();

router.post("/login", authControllers.logIn);
router.get("/me", auth(), authControllers.getProfile);

export const authRoutes = router;
