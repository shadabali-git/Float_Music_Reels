import { Schema, model, Document } from 'mongoose';

interface IMusic extends Document {
  title: string;
  url: string;
  tags: string[];
  likes?: number;
  dislikes?: number;
  comments?: string[];

}

const musicSchema = new Schema<IMusic>({
  title: { type: String, required: true },
  url: { type: String, required: true },
  tags: { type: [String], required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comments: { type: [String], default: [] },

});

export const Music = model<IMusic>('Music', musicSchema);
