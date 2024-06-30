import { authRoutes } from "../modules/auth/auth.routes";
import { blogRoutes } from "../modules/blog/blog.route";
import { educationRoutes } from "../modules/education/education.route";
import { experienceRoutes } from "../modules/experience/experience.route";
import { projectRoutes } from "../modules/project/project.route";
import { skillRoutes } from "../modules/skill/skill.route";
import express from "../utlis/express.utlis";

const router = express.Router();

const moduleRoutes = [
  { path: "/auth", route: authRoutes },
  { path: "/blogs", route: blogRoutes },
  { path: "/educations", route: educationRoutes },
  { path: "/experiences", route: experienceRoutes },
  { path: "/projects", route: projectRoutes },
  { path: "skills", route: skillRoutes },
];

moduleRoutes.forEach(({ path, route }) => router.use(path, route));

export const globalRoutes = router;
