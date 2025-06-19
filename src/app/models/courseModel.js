const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slugify = require('slugify');
const mongooseDelete = require('mongoose-delete');

const courseSchema = new Schema({
  author: ObjectId,
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  slug: { type: String, maxLength: 255, unique: true },
  videoId: { type: String, required: true },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Pre-save hook to generate slug// Tạo slug trước khi lưu
courseSchema.pre('save', function () {
  if (this.isModified('name') || !this.slug) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
});

// soft delete plugin configuration
courseSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model('Course', courseSchema);
