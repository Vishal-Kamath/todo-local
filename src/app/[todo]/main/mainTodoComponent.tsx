import UiCheckbox from "@/components/ui/checkbox";
import { Todo } from "@/hooks/useTodo";
import Link from "next/link";
import { ChangeEvent, FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const MainTodoComponent: FC<{
  todo: Todo;
  checkTodo: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteTodo: VoidFunction;
}> = ({ todo, checkTodo, deleteTodo }) => {
  return (
    <li
      key={todo.id}
      className="flex max-w-md items-center gap-3 border-b-1 border-slate-200 text-slate-400"
    >
      <UiCheckbox
        type="checkbox"
        id={todo.id}
        checked={todo.completed}
        width="5"
        height="5"
        className="h-5 w-5 cursor-pointer rounded accent-blue-500"
        onChange={checkTodo}
      />

      <Link
        href={`/${todo.id}`}
        className={`${
          todo.completed ? "line-through" : ""
        } w-full cursor-pointer bg-transparent py-3 outline-none`}
      >
        {todo.title}
      </Link>
    </li>
  );
};

export default MainTodoComponent;
