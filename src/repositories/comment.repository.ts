import CommentModel, { Comment } from "../models/comment.model";

class CommentRepository {
  async createComment(commentData: Partial<Comment>): Promise<Comment> {
    const comment = new CommentModel(commentData);
    return comment.save();
  }

  async getCommentById(id: string): Promise<Comment | null> {
    return CommentModel.findById(id);
  }
}

export default new CommentRepository();
