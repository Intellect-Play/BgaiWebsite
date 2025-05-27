const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAllHowWeWork,
  getHowWeWorkById,
  createHowWeWork,
  deleteHowWeWork,
  updateHowWeWork,
} = require("../controllers/HowWeWorkController");

const { ErrorMiddleware } = require("../utils/ErrorHandler");

// 📦 Multer storage ayarı
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
router.get("/", getAllHowWeWork);
router.get("/:id", getHowWeWorkById);
router.post("/", upload.single("image"), createHowWeWork);
router.put("/:id", upload.single("image"), updateHowWeWork);
router.delete("/:id", deleteHowWeWork);

// Global hata middleware
router.use(ErrorMiddleware);

module.exports = router;
