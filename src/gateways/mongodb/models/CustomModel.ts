import * as mongoose from 'mongoose';
import { Custom } from 'domain/entities/Custom';

const CustomSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

type CustomModel = Custom & mongoose.Document;

export default mongoose.model<CustomModel>('Custom', CustomSchema);
