import express from "express";
import cors from "cors";
import { globalRoutes } from "./app/routes/routes";
import { handleGlobalError } from "./app/middleware/globalError.middleware";
import { handleNotFound } from "./app/middleware/notFound.middleware";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      // "https://next-assignment-9-client.vercel.app",
    ],
    credentials: true,
  })
);

app.use("/api/v1", globalRoutes);
app.get("/", (req, res) => {
  res.send({ message: "hellow world" });
});
// basic global error handler
app.use(handleGlobalError);

app.use(handleNotFound);
export default app;
