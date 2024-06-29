import express from "express";
import cors from "cors";
import { globalRoutes } from "./app/routes/routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", globalRoutes);
app.get("/", (req, res) => {
  res.send({ message: "hellow world" });
});

export default app;
