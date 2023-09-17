import express from "express";
import commentController from "../controllers/comment.controller";

const router = express.Router();

router.post("/", commentController.createComment);
router.get("/:id", commentController.getAuthorById);

export default router;
