import { Comment } from "../models/comment.model";
import blogRepository from "../repositories/blog.repository";
import CommentRepository from "../repositories/comment.repository";
import { createCommentValidation } from "../utils/validation";

class CommentService {
  async createComment(commentData: Partial<Comment>): Promise<Comment> {
    const validationResult = createCommentValidation.validate(commentData);
    if (validationResult.error != null) {
      throw Error(validationResult.error.message);
    }

    var blog = await blogRepository.getBlogById(commentData.id);

    if (blog == null) {
      throw Error("Provided blog does not exist");
    }

    return CommentRepository.createComment(commentData);
  }

  async getCommentById(id: string): Promise<Comment | null> {
    return CommentRepository.getCommentById(id);
  }
}

export default new CommentService();
