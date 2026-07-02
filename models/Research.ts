import mongoose, { Schema, Document, Model } from 'mongoose';

const ResearchSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: String, required: true },
  abstract: { type: String, required: true },
  methodology: { type: String },
  results: { type: String },
  link: { type: String },
  institution: { type: String },
  authors: [{ type: String }],
  tags: [{ type: String }],
}, { timestamps: true });

const ResearchModel: Model<Document> = mongoose.models.Research || mongoose.model<Document>('Research', ResearchSchema);
export default ResearchModel;
