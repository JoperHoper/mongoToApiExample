const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  // foreign key needs ObjectId type and a 'ref' to the referenced schema
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  comment: { type: mongoose.Schema.Types.String },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("comment", commentSchema);
