import { authRoutes } from "../modules/auth/auth.routes";
import express from "../utlis/express.utlis";

const router = express.Router();

const moduleRoutes = [
  { path: "/auth", route: authRoutes },
  // { path: "/blogs", route: "" },
  // { path: "/educations", route: "" },
  // { path: "skills", route: "" },
];

moduleRoutes.forEach(({ path, route }) => router.use(path, route));

export const globalRoutes = router;
