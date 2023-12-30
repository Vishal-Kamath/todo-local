"use client";

import UiCheckbox from "@/components/ui/checkbox";
import { Todo, useTodos } from "@/hooks/useTodo";
import { ChangeEvent, FC } from "react";
import SubTodoList from "./subTodoList";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import SubTodoNotes from "./subTodoNotes";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const SubTodo: FC<{
  belongsTo: string;
  mainTodos: Todo[];
  setMainTodos: (updatedTodos: Todo[]) => void;
}> = ({ mainTodos, setMainTodos, belongsTo }) => {
  const router = useRouter();

  const [todos, setTodos] = useTodos(belongsTo);

  const currentTodo = mainTodos.find((todo) => todo.id === belongsTo);

  return !currentTodo ? (
    <section className="p-6">
      <p>
        Todo not found.{" "}
        <a href="/home" className="text-blue-600 underline">
          Go home
        </a>
      </p>
    </section>
  ) : (
    <section className="max-h-screen md:p-6">
      <div className="flex h-full w-full flex-col gap-6 border-neutral-300 bg-neutral-100 p-6 pr-3 md:rounded-lg md:border-2 md:border-dashed">
        <div className="flex items-center gap-3">
          <Link
            href="/home"
            className="text-neutral-400 hover:text-neutral-600"
          >
            <FaArrowLeftLong />
          </Link>

          <input
            type="text"
            value={currentTodo.title}
            onChange={(e) => {
              setMainTodos(
                mainTodos.map((t) => {
                  if (t.id === currentTodo.id) {
                    return { ...t, title: e.target.value };
                  }
                  return t;
                }),
              );
            }}
            className={`${
              currentTodo.completed ? "line-through" : ""
            } w-full cursor-pointer bg-transparent text-2xl text-neutral-600 outline-none`}
          />

          <button
            className="bg-transparent text-neutral-400 outline-none hover:text-neutral-600"
            onClick={() => {
              const DoesUserWantToDelete = confirm(
                `Do you want to delete "${currentTodo.title}"?`,
              );
              if (!DoesUserWantToDelete) return;
              setMainTodos(mainTodos.filter((t) => t.id !== currentTodo.id));
              localStorage.removeItem(currentTodo.id);
              router.replace("/home");
            }}
          >
            <MdDelete className="h-6 w-6" />
          </button>
        </div>

        <div className="scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-neutral-300 flex max-h-full flex-col gap-6 overflow-y-auto pr-3">
          <SubTodoList
            belongsTo={belongsTo}
            todos={todos}
            setTodos={setTodos}
          />
          <SubTodoNotes
            notes={currentTodo.notes || ""}
            setNote={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setMainTodos(
                mainTodos.map((t) => {
                  if (t.id === currentTodo.id) {
                    return { ...t, notes: e.target.value };
                  }
                  return t;
                }),
              );
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SubTodo;
