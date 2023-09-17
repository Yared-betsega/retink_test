import { Request, Response } from "express";
import blogService from "../services/blog.service";

class BlogController {
  async createBlog(req: Request, res: Response) {
    try {
      const blog = await blogService.createBlog(req.body);
      res.status(201).json(blog);
    } catch (error) {
      res.status(500).json({ error: "Failed to create blog" });
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
      res.status(500).json({ error: "Failed to fetch Blog" });
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
      res.status(500).json({ error: "Failed to fetch Blog" });
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
      res.status(500).json({ error: "Failed to fetch Blog" });
    }
  }
}

export default new BlogController();
