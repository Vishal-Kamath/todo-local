"use client";

import SubTodo from "./sub/subTodo";
import MainTodo from "./main/mainTodo";
import { useTodos } from "@/hooks/useTodo";
import { cn } from "@/utils/lib";

export default function Home({ params }: { params: { todo: string } }) {
  const [todos, setTodos] = useTodos("home");

  return (
    <main
      className={cn(
        "grid h-full w-full grid-cols-1",
        params.todo !== "home" && "lg:grid-cols-2",
      )}
    >
      <MainTodo
        todos={todos}
        setTodos={setTodos}
        className={params.todo !== "home" ? "max-lg:hidden" : ""}
      />
      {params.todo !== "home" ? (
        <SubTodo
          belongsTo={params.todo}
          mainTodos={todos}
          setMainTodos={setTodos}
        />
      ) : null}
    </main>
  );
}
