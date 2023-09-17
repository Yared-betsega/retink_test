import AuthorModel, { Author } from "../models/author.model";

class AuthorRepository {
  async createAuthor(authorData: Partial<Author>): Promise<Author> {
    const author = new AuthorModel(authorData);
    return author.save();
  }

  async getAuthorById(id: string): Promise<Author | null> {
    return AuthorModel.findById(id);
  }
}

export default new AuthorRepository();
