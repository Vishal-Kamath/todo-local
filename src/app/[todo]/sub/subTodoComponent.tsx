import UiCheckbox from "@/components/ui/checkbox";
import { Todo } from "@/hooks/useTodo";
import { ChangeEvent, FC } from "react";
import { RxCross2 } from "react-icons/rx";

const SubTodoComponent: FC<{
  todo: Todo;
  belongsTo: string;
  checkTodo: (event: ChangeEvent<HTMLInputElement>) => void;
  updateTodo: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteTodo: VoidFunction;
}> = ({ todo, checkTodo, updateTodo, deleteTodo }) => {
  return (
    <li
      key={todo.id}
      className="flex items-center gap-3 border-b-1 border-neutral-300 text-neutral-400"
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

      <input
        type="text"
        value={todo.title}
        onChange={updateTodo}
        className={`${
          todo.completed ? "line-through" : ""
        } w-full cursor-pointer bg-transparent py-3 text-neutral-500 outline-none focus-within:text-neutral-700`}
      />

      <button className="bg-transparent outline-none" onClick={deleteTodo}>
        <RxCross2 className="h-5 w-5" />
      </button>
    </li>
  );
};

export default SubTodoComponent;
