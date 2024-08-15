const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  // foreign key needs ObjectId type and a 'ref' to the referenced schema
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: { type: String, trim: true, require },
  description: { type: String, trim: true },
  image: { type: String, trim: true },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("post", postSchema);
