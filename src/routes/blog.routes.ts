import express from "express";
import blogController from "../controllers/blog.controller";

const router = express.Router();

router.post("/", blogController.createBlog);
router.get("/:id", blogController.getBlogById);
router.put("/:id/like", blogController.incrementLikesCount);
router.put("/:id/view", blogController.incrementViewsCount);

export default router;
