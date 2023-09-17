import express from "express";
import blogController from "../controllers/blog.controller";

const router = express.Router();

router.post("/blogs", blogController.createBlog);
router.get("/blogs/:id", blogController.getBlogById);
router.put("/blogs/:id/like", blogController.incrementLikesCount);
router.put("/blogs/:id/view", blogController.incrementViewsCount);

export default router;
