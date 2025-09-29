import { Request, Response } from "express";
import { Todo } from "../models/Todo";
import mongoose from "mongoose";

export const listTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find().sort({ created: -1 });
  res.json(todos);
};

export const getTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid Id" });
  }
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(400).json({ message: "Todo Not Found" });
  }
  res.json(todo);
};

export const createTodo = async (req: Request, res: Response) => {
  const { title, description, dueDate, completed } = req.body;
  const todo = await Todo.create({
    title,
    description,
    dueDate: dueDate ? new Date(dueDate) : undefined,
    completed: completed ?? false,
  });
  res.status(201).json(todo);
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return res.status(400).json({ message: "Invalid id" });
  const updates = req.body;
  if (updates.dueDate) updates.dueDate = new Date(updates.dueDate);
  const todo = await Todo.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    return res.status(400).json({ message: "Invalid id" });
  await Todo.findByIdAndDelete(id);
  res.status(204).send();
};
