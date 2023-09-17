import express from "express";
import authorController from "../controllers/author.controller";

const router = express.Router();

router.post("/", authorController.createAuthor);
router.get("/:id", authorController.getAuthorById);

export default router;
