import { Document } from 'mongoose';

export interface ITodo extends Document {
  _id: string;
  text: string;
  _v?: number;
}
