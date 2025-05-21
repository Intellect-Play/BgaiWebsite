const Game = require("../models/GamesModel");
const { ErrorHandler } = require("../utils/ErrorHandler");

const getAllGames = async (req, res, next) => {
  try {
    let { page = 1, limit = 100, search = "" } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const query = search
      ? {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { category: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const games = await Game.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Game.countDocuments(query);

    res.status(200).json({
      success: true,
      games,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    next(error);
  }
};

const getGameById = async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return next(new ErrorHandler("Game not found", 404));
    }
    res.status(200).json({ success: true, game });
  } catch (error) {
    next(new ErrorHandler("Invalid game ID", 400));
  }
};

const createGame = async (req, res) => {
  try {
    const { title, category, appStoreLink, googlePlayLink } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newGame = await Game.create({
      title,
      category,
      image,
      appStoreLink,
      googlePlayLink,
    });

    return res.status(201).json({
      success: true,
      newGame,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteGame = async (req, res, next) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return next(new ErrorHandler("Game not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "Game deleted successfully",
    });
  } catch (error) {
    next(new ErrorHandler("Invalid game ID", 400));
  }
};

const updateGame = async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return next(new ErrorHandler("Game not found", 404));
    }

    const { title, category, appStoreLink, googlePlayLink } = req.body;
    const updatedData = {
      title: title || game.title,
      category: category || game.category,
      appStoreLink: appStoreLink || game.appStoreLink,
      googlePlayLink: googlePlayLink || game.googlePlayLink,
      image: req.file ? `/uploads/${req.file.filename}` : game.image,
    };

    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, updatedGame });
  } catch (error) {
    next(new ErrorHandler("Invalid game ID", 400));
  }
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  deleteGame,
  updateGame,
};
