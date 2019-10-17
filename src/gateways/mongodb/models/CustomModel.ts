import mongoose, { Schema } from 'mongoose';

const CustomSchema = new Schema({
  name: {
    type: String,
  },
});

export default mongoose.model('Custom', CustomSchema);
