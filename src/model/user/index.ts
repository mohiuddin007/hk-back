import * as mongoose from "mongoose";

const peopleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    sector: {
      type: String,
      required: true,
      trim: true,
    },
    terms: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const People = mongoose.model("User", peopleSchema);

module.exports = People;
