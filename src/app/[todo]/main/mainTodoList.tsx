"use client";

import { Todo, useTodos } from "@/hooks/useTodo";
import { FC, useState } from "react";
import { RxPlus } from "react-icons/rx";
import { v4 as uuid } from "uuid";
import MainTodoComponent from "./mainTodoComponent";

const MainTodoList: FC<{
  todos: Todo[];
  setTodos: (updatedTodos: Todo[]) => void;
}> = ({ todos, setTodos }) => {
  const [newTodo, setnewTodo] = useState("");
  const addNewTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([
      ...todos,
      {
        id: uuid(),
        title: newTodo,
        completed: false,
      },
    ]);
    setnewTodo("");
  };

  return (
    <div className="flex w-full flex-col gap-1">
      <ul className="flex flex-col">
        {todos.map((todo) => (
          <MainTodoComponent
            key={todo.id}
            todo={todo}
            checkTodo={(e) => {
              setTodos(
                todos.map((t) => {
                  if (t.id === todo.id) {
                    return { ...t, completed: e.target.checked };
                  }
                  return t;
                }),
              );
            }}
            deleteTodo={() => {
              const checkIfUserWantsToDelete = confirm(
                `Do you want to delete "${todo.title}"?`,
              );
              if (!checkIfUserWantsToDelete) return;
              setTodos(todos.filter((t) => t.id !== todo.id));
            }}
          />
        ))}

        <li className="flex max-w-md items-center gap-3 py-4 text-slate-400">
          <button
            onClick={addNewTodo}
            disabled={!newTodo}
            className="outline-none"
          >
            <RxPlus className="h-5 w-5 flex-shrink-0 cursor-pointer" />
          </button>

          <div className="flex w-full flex-col">
            <input
              type="text"
              placeholder="Add a new task"
              className="peer bg-transparent outline-none"
              value={newTodo}
              onChange={(e) => setnewTodo(e.target.value)}
              onKeyDown={(e) => {
                if (e.code === "Enter") addNewTodo();
              }}
            />
            <hr className="w-0 border-neutral-400 transition-all duration-300 ease-in-out peer-focus-within:w-full"></hr>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MainTodoList;
