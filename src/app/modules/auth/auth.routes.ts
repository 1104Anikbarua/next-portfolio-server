import express from "../../utlis/express.utlis";
import { authControllers } from "./auth.controller";

const router = express.Router();

router.post("/create-user", authControllers.logIn);

export const authRoutes = router;
