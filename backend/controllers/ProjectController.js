const Project = require("../models/ProjectsModel");
const { ErrorHandler } = require("../utils/ErrorHandler");

const getAllProjects = async (req, res, next) => {
  try {
    let { page = 1, limit = 100, search = "" } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const query = search
      ? {
          title: { $regex: search, $options: "i" },
        }
      : {};

    const projects = await Project.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Project.countDocuments(query);

    res.status(200).json({
      success: true,
      projects,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    next(error);
  }
};

const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return next(new ErrorHandler("Project not found", 404));
    }
    res.status(200).json({ success: true, project });
  } catch (error) {
    next(new ErrorHandler("Invalid project ID", 400));
  }
};

const createProject = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newProject = await Project.create({
      title,
      description,
      image,
    });

    return res.status(201).json({
      success: true,
      newProject,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return next(new ErrorHandler("Project not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    next(new ErrorHandler("Invalid project ID", 400));
  }
};

const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return next(new ErrorHandler("Project not found", 404));
    }

    const { title, description } = req.body;
    const updatedData = {
      title: title || project.title,
      description: description || project.description,
      image: req.file ? `/uploads/${req.file.filename}` : project.image,
    };

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({ success: true, updatedProject });
  } catch (error) {
    next(new ErrorHandler("Invalid project ID", 400));
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  deleteProject,
  updateProject,
};
