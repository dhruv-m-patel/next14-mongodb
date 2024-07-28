import { model, models, Schema } from 'mongoose';

export interface IPost {
    title: string;
    description: string;
}

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const Post = models.Post || model('Post', postSchema);

export default Post;
