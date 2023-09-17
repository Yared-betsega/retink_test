import express from "express";
import authorController from "../controllers/author.controller";

const router = express.Router();

router.post("/authors", authorController.createAuthor);
router.get("/authors/:id", authorController.getAuthorById);

export default router;
