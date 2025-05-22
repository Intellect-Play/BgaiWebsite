const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAllJobs,
  getJobById,
  createJob,
  deleteJob,
  updateJob,
} = require("../controllers/JobController");

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
router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.post("/", upload.single("image"), createJob);
router.put("/:id", upload.single("image"), updateJob);
router.delete("/:id", deleteJob);

// Global hata
router.use(ErrorMiddleware);

module.exports = router;
