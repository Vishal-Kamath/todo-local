"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

const todoSchema = z.object({
  id: z.string(),
  title: z.string(),
  notes: z.string().nullish(),
  completed: z.boolean(),
});
export type Todo = z.infer<typeof todoSchema>;
const todoListSchema = z.array(todoSchema);

export function getTodosFromLocalstorage(belongsTo: string): Todo[] {
  try {
    if (!localStorage) return [];
    const localTodos = localStorage.getItem(belongsTo);

    if (!localTodos) {
      return [];
    }
    const parsedTodos = JSON.parse(localTodos) as Todo[];
    todoListSchema.parse(parsedTodos);

    return parsedTodos;
  } catch (err) {
    console.log(err);
    return [];
  }
}

function setTodosToLocalStorage(belongsTo: string, todos: Todo[]) {
  try {
    if (!localStorage) return;
    localStorage.setItem(belongsTo, JSON.stringify(todos));
  } catch (err) {
    console.log(err);
    return;
  }
}

export function useTodos(
  belongsTo: string,
): [Todo[], (updatedTodos: Todo[]) => void] {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSetTodos(updatedTodos: Todo[]) {
    setTodosToLocalStorage(belongsTo, updatedTodos);
    setTodos(updatedTodos);
  }

  useEffect(() => {
    const localTodos = getTodosFromLocalstorage(belongsTo);
    setTodos(localTodos);
  }, [belongsTo]);

  return [todos, handleSetTodos];
}
