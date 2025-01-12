import { z } from "zod";

export const TodoSchema = z.object({
  id: z.number(),
  startDay: z.number(),
  endDay: z.number(),
  type: z.string(),
  text:z.string(),
})

export type Todo = z.infer<typeof TodoSchema>;

export const TodoListSchema = z.array(TodoSchema);
export type TodoList = z.infer<typeof TodoListSchema>;