import express from "express";
import cors from "cors";
import authorRoutes from "./routes/author.routes";
import blogRoutes from "./routes/blog.routes";
import commentRoutes from "./routes/comment.routes";
import { errorHandler } from "./utils/error_handler";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/author", authorRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/comment", commentRoutes);

app.use(errorHandler);

export default app;
