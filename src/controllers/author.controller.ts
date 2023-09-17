import { Request, Response } from "express";
import authorService from "../services/author.service";

class AuthorController {
  async createAuthor(req: Request, res: Response) {
    try {
      const author = await authorService.createAuthor(req.body);
      res.status(201).json(author);
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
      const author = await authorService.getAuthorById(req.params.id);
      if (!author) {
        return res.status(404).json({ error: "Author not found" });
      }
      res.status(200).json(author);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Cannot find author with the provided id" });
    }
  }
}

export default new AuthorController();
