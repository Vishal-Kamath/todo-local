import UiCheckbox from "@/components/ui/checkbox";
import { Todo } from "@/hooks/useTodo";
import Link from "next/link";
import { ChangeEvent, FC } from "react";
import { RxCross2 } from "react-icons/rx";

const MainTodoComponent: FC<{
  todo: Todo;
  checkTodo: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteTodo: VoidFunction;
}> = ({ todo, checkTodo, deleteTodo }) => {
  return (
    <li
      key={todo.id}
      className="flex max-w-md items-center gap-3 border-b-1 border-neutral-200 text-neutral-400 last:border-none"
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

      <button
        className="bg-transparent text-neutral-300 outline-none hover:text-neutral-500"
        onClick={deleteTodo}
      >
        <RxCross2 className="h-5 w-5" />
      </button>
    </li>
  );
};

export default MainTodoComponent;
