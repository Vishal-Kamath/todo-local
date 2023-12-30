"use client";

import SubTodo from "./sub/subTodo";
import MainTodo from "./main/mainTodo";
import { useTodos } from "@/hooks/useTodo";

export default function Home({ params }: { params: { todo: string } }) {
  const [todos, setTodos] = useTodos("home");

  return (
    <main className="grid w-full grid-cols-2">
      <MainTodo todos={todos} setTodos={setTodos} />
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
