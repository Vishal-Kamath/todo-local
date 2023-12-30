"use client";

import { Todo, useTodos } from "@/hooks/useTodo";
import { ChangeEvent, FC, useState } from "react";
import { RxPlus } from "react-icons/rx";
import { v4 as uuid } from "uuid";
import SubTodoComponent from "./subTodoComponent";

const SubTodoList: FC<{
  belongsTo: string;
  todos: Todo[];
  setTodos: (updatedTodos: Todo[]) => void;
}> = ({ belongsTo, todos, setTodos }) => {
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
          <SubTodoComponent
            key={todo.id}
            todo={todo}
            belongsTo={belongsTo}
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
            updateTodo={(e: ChangeEvent<HTMLInputElement>) => {
              setTodos(
                todos.map((t) => {
                  if (t.id === todo.id) {
                    return { ...t, title: e.target.value };
                  }
                  return t;
                }),
              );
            }}
            deleteTodo={() => {
              setTodos(todos.filter((t) => t.id !== todo.id));
            }}
          />
        ))}

        <li className="group flex flex-col">
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
          <hr className="w-0 border-neutral-400 transition-all duration-300 ease-in-out group-focus-within:w-full"></hr>
        </li>
      </ul>
    </div>
  );
};

export default SubTodoList;
