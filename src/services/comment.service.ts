import { Comment } from "../models/comment.model";
import blogRepository from "../repositories/blog.repository";
import CommentRepository from "../repositories/comment.repository";
import { createCommentValidation } from "../utils/validation";
import blogService from "./blog.service";

class CommentService {
  async createComment(commentData: Partial<Comment>): Promise<Comment> {
    const validationResult = createCommentValidation.validate(commentData);
    if (validationResult.error != null) {
      throw Error(validationResult.error.message);
    }

    var blog = await blogRepository.getBlogById(commentData.blog!);

    if (blog == null) {
      throw Error("Provided blog does not exist");
    }

    var comment = await CommentRepository.createComment(commentData);
    await blogService.addCommentToBlog(blog.id, comment.id);
    return comment;
  }

  async getCommentById(id: string): Promise<Comment | null> {
    return CommentRepository.getCommentById(id);
  }
}

export default new CommentService();
