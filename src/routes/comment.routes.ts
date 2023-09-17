import express from "express";
import commentController from "../controllers/comment.controller";

const router = express.Router();

router.post("/comments", commentController.createComment);
router.get("/comments/:id", commentController.getAuthorById);

export default router;
