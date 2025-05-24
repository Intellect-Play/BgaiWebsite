const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAllProjects,
  getProjectById,
  createProject,
  deleteProject,
  updateProject,
} = require("../controllers/ProjectController");

const { ErrorMiddleware } = require("../utils/ErrorHandler");

// 🔧 Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

// 🧠 Routes
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", upload.single("image"), createProject);
router.put("/:id", upload.single("image"), updateProject);
router.delete("/:id", deleteProject);

// Global hata
router.use(ErrorMiddleware);

module.exports = router;
