import { Author } from "../models/author.model";
import AuthorRepository from "../repositories/author.repository";
import { createAuthorValidation } from "../utils/validation";

class AuthorService {
  async createAuthor(authorData: Partial<Author>): Promise<Author> {
    createAuthorValidation.validate(authorData);
    return AuthorRepository.createAuthor(authorData);
  }

  async getAuthorById(id: string): Promise<Author | null> {
    return AuthorRepository.getAuthorById(id);
  }
}

export default new AuthorService();
