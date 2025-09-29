import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1, "title required"),
  description: z.string().optional(),
  dueDate: z.string().optional().nullable(), // accept ISO string or undefined
  completed: z.boolean().optional(),
});

export const updateTodoSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  dueDate: z.string().optional().nullable(),
  completed: z.boolean().optional(),
});
