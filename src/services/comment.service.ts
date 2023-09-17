import { Comment } from "../models/comment.model";
import CommentRepository from "../repositories/comment.repository";
import { createCommentValidation } from "../utils/validation";

class CommentService {
  async createComment(commentData: Partial<Comment>): Promise<Comment> {
    createCommentValidation.validate(commentData);
    return CommentRepository.createComment(commentData);
  }

  async getCommentById(id: string): Promise<Comment | null> {
    return CommentRepository.getCommentById(id);
  }
}

export default new CommentService();
