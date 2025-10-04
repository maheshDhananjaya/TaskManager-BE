import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "express-async-errors";
import todosRouter from "./routes/todo";
import { errorHandler } from "./middleware/errorHandler";

export function createApp(corsOrigin: string | undefined) {
  const app = express();
  app.use(helmet());
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: [
        "https://to-do-app-ix66-j06m0ts7j-maheshdhananjayas-projects.vercel.app", // ✅ your Vercel frontend
        "http://localhost:3000", // ✅ optional for local dev
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
  app.use("/api/todos", todosRouter);
  app.use(errorHandler);
  return app;
}
