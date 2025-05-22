const Job = require("../models/JobsModel");
const { ErrorHandler } = require("../utils/ErrorHandler");

const getAllJobs = async (req, res, next) => {
  try {
    let { page = 1, limit = 100, search = "" } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const query = search
      ? {
          title: { $regex: search, $options: "i" },
        }
      : {};

    const jobs = await Job.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Job.countDocuments(query);

    res.status(200).json({
      success: true,
      jobs,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    next(error);
  }
};

const getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return next(new ErrorHandler("Job not found", 404));
    }
    res.status(200).json({ success: true, job });
  } catch (error) {
    next(new ErrorHandler("Invalid job ID", 400));
  }
};

const createJob = async (req, res) => {
  try {
    const { title, description, expireDate } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newJob = await Job.create({
      title,
      description,
      expireDate,
      image,
    });

    return res.status(201).json({
      success: true,
      newJob,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return next(new ErrorHandler("Job not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    next(new ErrorHandler("Invalid job ID", 400));
  }
};

const updateJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return next(new ErrorHandler("Job not found", 404));
    }

    const { title, description, expireDate } = req.body;
    const updatedData = {
      title: title || job.title,
      description: description || job.description,
      expireDate: expireDate || job.expireDate,
      image: req.file ? `/uploads/${req.file.filename}` : job.image,
    };

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, updatedJob });
  } catch (error) {
    next(new ErrorHandler("Invalid job ID", 400));
  }
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  deleteJob,
  updateJob,
};
