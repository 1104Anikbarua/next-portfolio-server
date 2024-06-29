import express from "../../utlis/express.utlis";
import { blogControllers } from "./blog.controller";

const router = express.Router();

router.post("/create-blog", blogControllers.createBlog);
router.patch("/set-blog/:id", blogControllers.setBlog);
router.delete("/remove-blog/:id", blogControllers.removeBlog);
router.get("/", blogControllers.getBlogs);

export const blogRoutes = router;
