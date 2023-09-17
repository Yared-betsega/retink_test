import Joi from "joi";

// Author Validations
export const createAuthorValidation = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().required(),
});

// Blog Validations
export const createBlogValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.string().required(),
  coAuthors: Joi.array().items(Joi.string()),
  comments: Joi.array().items(Joi.string()),
  likesCount: Joi.number().integer().min(0),
  viewCount: Joi.number().integer().min(0),
});

// Comment Validations
export const createCommentValidation = Joi.object({
  blog: Joi.string().required(), // You might want to validate the blog ID
  user: Joi.string().required(), // You might want to validate the user ID
  text: Joi.string().required(),
});
