import { Document, model, Schema } from "mongoose";

export interface ITodo {
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TodoDocument = ITodo & Document;

const todoSchema = new Schema<TodoDocument>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false },
    dueDate: { type: Date, default: null },
  },
  { timestamps: true }
);

export const Todo = model<TodoDocument>("Todo", todoSchema, "task_manager");
