const HowWeWork = require("../models/HowWeWorkModel");
const { ErrorHandler } = require("../utils/ErrorHandler");

const getAllHowWeWork = async (req, res, next) => {
  try {
    let { page = 1, limit = 100, search = "" } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const query = search ? { title: { $regex: search, $options: "i" } } : {};

    const items = await HowWeWork.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await HowWeWork.countDocuments(query);

    res.status(200).json({
      success: true,
      howWeWork: items,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    next(error);
  }
};

const getHowWeWorkById = async (req, res, next) => {
  try {
    const item = await HowWeWork.findById(req.params.id);
    if (!item) {
      return next(new ErrorHandler("HowWeWork item not found", 404));
    }
    res.status(200).json({ success: true, howWeWork: item });
  } catch (error) {
    next(new ErrorHandler("Invalid ID", 400));
  }
};

const createHowWeWork = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newItem = await HowWeWork.create({
      title,
      description,
      image,
    });

    return res.status(201).json({
      success: true,
      howWeWork: newItem,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteHowWeWork = async (req, res, next) => {
  try {
    const item = await HowWeWork.findByIdAndDelete(req.params.id);
    if (!item) {
      return next(new ErrorHandler("HowWeWork item not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "Item deleted successfully",
    });
  } catch (error) {
    next(new ErrorHandler("Invalid ID", 400));
  }
};

const updateHowWeWork = async (req, res, next) => {
  try {
    const item = await HowWeWork.findById(req.params.id);
    if (!item) {
      return next(new ErrorHandler("HowWeWork item not found", 404));
    }

    const { title, description } = req.body;
    const updatedData = {
      title: title || item.title,
      description: description || item.description,
      image: req.file ? `/uploads/${req.file.filename}` : item.image,
    };

    const updatedItem = await HowWeWork.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, howWeWork: updatedItem });
  } catch (error) {
    next(new ErrorHandler("Invalid ID", 400));
  }
};

module.exports = {
  getAllHowWeWork,
  getHowWeWorkById,
  createHowWeWork,
  deleteHowWeWork,
  updateHowWeWork,
};
