import { ITodo } from '../types/todo.ts';
import TodoModel from '../models/TodoModel.ts';
import { Request, Response } from 'express';

export const getToDo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await TodoModel.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

export const saveToDo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, 'text'>;

    const todo: ITodo = new TodoModel({
      text: body.text,
    });

    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await TodoModel.find();

    res.status(201).json({
      message: 'Added Successfully.......',
      todo: newTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

export const updateToDo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      body: { text, id },
    } = req;

    const updateToDo: ITodo | null = await TodoModel.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );
    const allTodos: ITodo[] = await TodoModel.find();
    res.status(200).json({
      message: 'Updated Successfully.....',
      todo: updateToDo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteToDo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleteToDo: ITodo | null = await TodoModel.findByIdAndRemove(
      req.body.id
    );
    const allTodos: ITodo[] = await TodoModel.find();
    res.status(200).json({
      message: 'Delete Successfully.....',
      todo: deleteToDo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};
