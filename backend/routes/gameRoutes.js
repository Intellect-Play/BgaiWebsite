const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAllGames,
  getGameById,
  createGame,
  deleteGame,
  updateGame,
} = require("../controllers/GameController");

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
router.get("/", getAllGames);
router.get("/:id", getGameById);
router.post("/", upload.single("image"), createGame);
router.put("/:id", upload.single("image"), updateGame);
router.delete("/:id", deleteGame);

// Global hata
router.use(ErrorMiddleware);

module.exports = router;
