import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Register routes
// app.use('/api', authorRoutes);
// app.use('/api', blogRoutes);
// app.use('/api', commentRoutes);

// Error handling middleware
// app.use(errorHandler);

export default app;
