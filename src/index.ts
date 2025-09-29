import { createApp } from "./app";
import { connectDB } from "./utils/db";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

async function main() {
  await connectDB(MONGODB_URI!);
  const app = createApp(CORS_ORIGIN);
  app.listen(PORT, () => console.log(`server is listning on port ${PORT}`));
}

main().catch((err) => {
  console.error("starting error:", err);
  process.exit(1);
});
