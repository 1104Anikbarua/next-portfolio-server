import express from "../../utlis/express.utlis";
import { authControllers } from "./auth.controller";

const router = express.Router();

router.post("/login", authControllers.logIn);

export const authRoutes = router;
