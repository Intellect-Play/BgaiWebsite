require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const router = express.Router();
const connection = require("./db/db");
const adminRoutes = require("./routes/adminRoutes");
const jobRoutes = require("./routes/jobRoutes");
const projectRoutes = require("./routes/projectRoutes");
app.use(express.static(__dirname));

connection();

const gameRouter = require("./routes/gameRoutes");

console.log("Mongo URL:", process.env.DB);

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/bgaiv1/games", gameRouter);
app.use("/api/bgaiv1/admin", adminRoutes);
app.use("/api/bgaiv1/jobs", jobRoutes);
app.use("/api/bgaiv1/projects", projectRoutes);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
