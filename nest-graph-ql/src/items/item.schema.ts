import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
});
