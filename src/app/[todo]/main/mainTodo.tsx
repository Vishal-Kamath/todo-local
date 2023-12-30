"use client";

import { Todo } from "@/hooks/useTodo";
import { FC } from "react";
import MainTodoList from "./mainTodoList";

const MainTodo: FC<{
  todos: Todo[];
  setTodos: (updatedTodos: Todo[]) => void;
}> = ({ todos, setTodos }) => {
  return (
    <section className="flex w-full flex-col gap-6 p-6">
      <h1 className="text-4xl font-semibold text-neutral-600">Tasks</h1>

      <MainTodoList todos={todos} setTodos={setTodos} />
    </section>
  );
};

export default MainTodo;
