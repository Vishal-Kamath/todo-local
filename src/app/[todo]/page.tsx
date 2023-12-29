"use client";

import MainTodo from "./main/mainTodo";
import { useTodos } from "@/hooks/useTodo";

export default function Home({ params }: { params: { todo: string } }) {
  const [todos, setTodos] = useTodos("home");

  return (
    <main className="grid w-full grid-cols-2">
      <MainTodo todos={todos} setTodos={setTodos} />
    </main>
  );
}
