import { ChangeEvent, FC } from "react";

const SubTodoNotes: FC<{
  notes: string;
  setNote: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ notes, setNote }) => {
  return (
    <textarea
      placeholder="Add a note..."
      className="scrollbar-none h-full min-h-40 w-full bg-transparent text-neutral-400 outline-none"
      value={notes}
      onChange={setNote}
    />
  );
};

export default SubTodoNotes;
