import { Request, Response } from "express";
import blogService from "../services/blog.service";

class BlogController {
  async createBlog(req: Request, res: Response) {
    try {
      const blog = await blogService.createBlog(req.body);
      res.status(201).json(blog);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Internal server error" });
      }
    }
  }

  async getBlogById(req: Request, res: Response) {
    try {
      const blog = await blogService.getBlogById(req.params.id);
      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.status(200).json(blog);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Internal server error" });
      }
    }
  }

  async incrementLikesCount(req: Request, res: Response) {
    try {
      const blog = await blogService.likeBlog(req.params.id);
      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.status(200).json(blog);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Internal server error" });
      }
    }
  }

  async incrementViewsCount(req: Request, res: Response) {
    try {
      const blog = await blogService.viewBlog(req.params.id);
      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.status(200).json(blog);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Internal server error" });
      }
    }
  }
}

export default new BlogController();
