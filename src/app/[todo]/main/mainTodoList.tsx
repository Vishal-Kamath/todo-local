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
    <div className="flex flex-col">
      <ul className="flex w-full flex-col overflow-y-auto md:max-h-96">
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
              localStorage.removeItem(todo.id);
            }}
          />
        ))}
      </ul>
      <div className="group flex flex-col border-t-1 border-neutral-200 md:max-w-md">
        <div className="flex items-center gap-3 py-3 text-neutral-400">
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
              className="bg-transparent outline-none"
              value={newTodo}
              onChange={(e) => setnewTodo(e.target.value)}
              onKeyDown={(e) => {
                if (e.code === "Enter") addNewTodo();
              }}
            />
          </div>
        </div>
        <hr className="w-0 border-neutral-300 transition-all duration-300 ease-in-out group-focus-within:w-full"></hr>
      </div>
    </div>
  );
};

export default MainTodoList;
