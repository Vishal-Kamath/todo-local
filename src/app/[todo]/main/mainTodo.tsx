"use client";

import { Todo } from "@/hooks/useTodo";
import { FC, HTMLAttributes } from "react";
import MainTodoList from "./mainTodoList";
import { cn } from "@/utils/lib";

interface Props extends HTMLAttributes<HTMLDivElement> {
  todos: Todo[];
  setTodos: (updatedTodos: Todo[]) => void;
}
const MainTodo: FC<Props> = ({ todos, setTodos, className, ...props }) => {
  return (
    <section
      className={cn(
        "flex h-full w-full max-w-lg flex-col justify-start gap-6 p-6",
        className,
      )}
      {...props}
    >
      <h1 className="text-xl font-semibold text-neutral-500 md:text-2xl lg:text-4xl">
        Tasks
      </h1>

      <MainTodoList todos={todos} setTodos={setTodos} />
    </section>
  );
};

export default MainTodo;
