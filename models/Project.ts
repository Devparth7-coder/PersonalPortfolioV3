import mongoose, { Schema, Document, Model } from 'mongoose';

const ProjectSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  problem: { type: String },
  solution: { type: String },
  architectureDiagram: { type: String },
  techStack: [{ type: String }],
  challenges: [{ type: String }],
  screenshots: [{ type: String }],
  features: [{ type: String }],
  githubUrl: { type: String },
  liveUrl: { type: String },
  tags: [{ type: String }],
  category: [{ type: String }],
  featured: { type: Boolean, default: false },
  pinned: { type: Boolean, default: false },
  stars: { type: Number, default: 0 },
  forks: { type: Number, default: 0 },
  createdAt: { type: String },
  futureImprovements: [{ type: String }],
}, { timestamps: true });

const ProjectModel: Model<Document> = mongoose.models.Project || mongoose.model<Document>('Project', ProjectSchema);
export default ProjectModel;
