import { Request, Response } from "express";
import commentService from "../services/comment.service";

class CommentController {
  async createComment(req: Request, res: Response) {
    try {
      const comment = await commentService.createComment(req.body);
      res.status(201).json(comment);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Internal server error" });
      }
    }
  }

  async getAuthorById(req: Request, res: Response) {
    try {
      const comment = await commentService.getCommentById(req.params.id);
      if (!comment) {
        return res.status(404).json({ error: "Comment not found" });
      }
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch comment" });
    }
  }
}

export default new CommentController();
