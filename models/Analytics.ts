import mongoose, { Schema, Document, Model } from 'mongoose';

const AnalyticsSchema: Schema = new Schema({
  path: { type: String, required: true },
  views: { type: Number, default: 1 },
  uniqueVisitors: { type: Number, default: 1 },
  lastVisited: { type: Date, default: Date.now },
  referrer: { type: String },
  device: { type: String },
}, { timestamps: true });

const AnalyticsModel: Model<Document> = mongoose.models.Analytics || mongoose.model<Document>('Analytics', AnalyticsSchema);
export default AnalyticsModel;
