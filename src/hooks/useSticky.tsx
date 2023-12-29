"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

const stickySchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  color: z.string(),
});
export type Sticky = z.infer<typeof stickySchema>;
const stickyNotesSchema = z.array(stickySchema);

export function getStickyFromLocalstorage(): Sticky[] {
  try {
    if (!localStorage) return [];
    const localStickyNotes = localStorage.getItem("stickyNotes");

    if (!localStickyNotes) {
      return [];
    }
    const parsedStickyNotes = JSON.parse(localStickyNotes) as Sticky[];
    stickyNotesSchema.parse(parsedStickyNotes);

    return parsedStickyNotes;
  } catch (err) {
    console.log(err);
    return [];
  }
}

function setStickyToLocalStorage(stickyNotes: Sticky[]) {
  try {
    if (!localStorage) return;
    localStorage.setItem("stickyNotes", JSON.stringify(stickyNotes));
  } catch (err) {
    console.log(err);
    return;
  }
}

export function useSticky(): [
  Sticky[],
  (updatedStickyNotess: Sticky[]) => void,
] {
  const [sticky, setSticky] = useState<Sticky[]>([]);

  function handleSetStickyNotes(updatedStickyNotes: Sticky[]) {
    setStickyToLocalStorage(updatedStickyNotes);
    setSticky(updatedStickyNotes);
  }

  useEffect(() => {
    const localStickyNotes = getStickyFromLocalstorage();
    setSticky(localStickyNotes);
  }, []);

  return [sticky, handleSetStickyNotes];
}
