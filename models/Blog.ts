import mongoose, { Schema, Document, Model } from 'mongoose';

const BlogSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  coverImage: { type: String },
  category: { type: String, required: true },
  tags: [{ type: String }],
  readTime: { type: String },
  publishedAt: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
}, { timestamps: true });

const BlogModel: Model<Document> = mongoose.models.Blog || mongoose.model<Document>('Blog', BlogSchema);
export default BlogModel;
