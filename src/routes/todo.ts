import { Router } from "express";
import * as ctrl from "../controllers/todoController";
import { validateBody } from "../middleware/validateRequest";
import { createTodoSchema, updateTodoSchema } from "../validations/todoSchema";

const router = Router();

router.get("/", ctrl.listTodos);
router.get("/:id", ctrl.getTodo);
router.post("/", validateBody(createTodoSchema), ctrl.createTodo);
router.put("/:id", validateBody(updateTodoSchema), ctrl.updateTodo);
router.delete("/:id", ctrl.deleteTodo);

export default router;
