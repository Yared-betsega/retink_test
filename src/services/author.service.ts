import { Author } from "../models/author.model";
import AuthorRepository from "../repositories/author.repository";
import { createAuthorValidation } from "../utils/validation";

class AuthorService {
  async createAuthor(authorData: Partial<Author>): Promise<Author> {
    const validationResult = createAuthorValidation.validate(authorData);
    if (validationResult.error != null) {
      throw Error(validationResult.error.message);
    }
    return AuthorRepository.createAuthor(authorData);
  }

  async getAuthorById(id: string): Promise<Author | null> {
    return AuthorRepository.getAuthorById(id);
  }
}

export default new AuthorService();
