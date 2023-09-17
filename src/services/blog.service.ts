import { IBlog } from "../models/blog.model";
import blogRepository from "../repositories/blog.repository";
import BlogRepository from "../repositories/blog.repository";
import { createBlogValidation } from "../utils/validation";

class BlogService {
  async createBlog(blogData: Partial<IBlog>): Promise<IBlog> {
    const validationResult = createBlogValidation.validate(blogData);
    if (validationResult.error != null) {
      throw Error(validationResult.error.message);
    }
    return blogRepository.createBlog(blogData);
  }

  async getBlogById(id: string): Promise<IBlog | null> {
    return BlogRepository.getBlogById(id);
  }

  async likeBlog(id: string): Promise<IBlog | null> {
    return BlogRepository.incrementLikesCount(id);
  }

  async viewBlog(id: string): Promise<IBlog | null> {
    return BlogRepository.incrementViewCount(id);
  }
}

export default new BlogService();
