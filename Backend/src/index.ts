import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import path from "path";

import auth from "./Routes/auth.routes";
import media from "./Routes/media.routes";

dotenv.config();
const port = 4000;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:4173",
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:8000",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", auth);
app.use("/api", media)

app.use("/public", express.static(path.join(__dirname, "/Upload")));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
