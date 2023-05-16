import { Schema, model } from 'mongoose';
import { ITodo } from '../types/todo.ts';

const todoSchema: Schema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

export default model<ITodo>('ToDo', todoSchema);
