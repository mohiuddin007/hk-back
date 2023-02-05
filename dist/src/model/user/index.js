"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var peopleSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
});
var People = mongoose.model("User", peopleSchema);
module.exports = People;
