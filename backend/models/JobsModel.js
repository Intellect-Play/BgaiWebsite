const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    expireDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
