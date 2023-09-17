import BlogModel, { IBlog } from "../models/blog.model";

class BlogRepository {
  async createBlog(blogData: Partial<IBlog>): Promise<IBlog> {
    const blog = new BlogModel(blogData);
    return blog.save();
  }

  async getBlogById(id: string): Promise<IBlog | null> {
    return BlogModel.findById(id);
  }

  async incrementLikesCount(blogId: string): Promise<IBlog | null> {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      blogId,
      { $inc: { likesCount: 1 } },
      { new: true }
    );

    return updatedBlog;
  }

  async incrementViewCount(blogId: string): Promise<IBlog | null> {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      blogId,
      { $inc: { viewsCount: 1 } },
      { new: true }
    );

    return updatedBlog;
  }
}

export default new BlogRepository();
