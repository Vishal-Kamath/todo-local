import { ChangeEvent, FC } from "react";

const SubTodoNotes: FC<{
  notes: string;
  setNote: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ notes, setNote }) => {
  return (
    <textarea
      placeholder="Add a note..."
      className="h-full max-h-40 min-h-40 w-full resize-none bg-transparent text-neutral-400 outline-none"
      value={notes}
      onChange={setNote}
    />
  );
};

export default SubTodoNotes;
