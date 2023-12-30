"use client";

import { useSticky } from "@/hooks/useSticky";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { MdDelete } from "react-icons/md";

export default function StickyNotesPage() {
  const [sticky, setSticky] = useSticky();

  const [newStickyTitle, setNewStickyTitle] = useState("");
  const [newStickyBody, setNewStickyBody] = useState("");

  return (
    <main className="flex flex-col gap-6 p-6">
      <h1 className="text-xl font-semibold text-neutral-500 md:text-2xl lg:text-4xl">
        Sticky Wall
      </h1>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sticky.map((note) => (
          <li
            key={note.id}
            className="flex aspect-square h-full w-full flex-col gap-2 overflow-clip rounded-md bg-amber-50 p-5"
          >
            <div className="flex w-full justify-between gap-2">
              <input
                type="text"
                placeholder="Title"
                className="w-full bg-transparent text-lg font-semibold text-neutral-800 outline-none"
                value={note.title}
                onChange={(e) =>
                  setSticky([
                    ...sticky.filter((n) => n.id !== note.id),
                    { ...note, title: e.target.value },
                  ])
                }
              />
              <button
                className="outline-none"
                onClick={() => {
                  const doesUserWantToDelete = confirm(
                    "Are you sure you want to delete this sticky note?",
                  );
                  if (!doesUserWantToDelete) return;
                  setSticky([...sticky.filter((n) => n.id !== note.id)]);
                }}
              >
                <MdDelete className="h-5 w-5 text-neutral-600" />
              </button>
            </div>

            <textarea
              placeholder="write something..."
              className="h-full w-full bg-transparent text-sm text-neutral-400 outline-none"
              value={note.body}
              onChange={(e) =>
                setSticky([
                  ...sticky.filter((n) => n.id !== note.id),
                  { ...note, body: e.target.value },
                ])
              }
            />
          </li>
        ))}

        <li className="flex aspect-square w-full flex-col gap-2 overflow-clip rounded-md bg-slate-50 p-5">
          <input
            type="text"
            placeholder="Title"
            className="bg-transparent text-lg font-bold text-slate-600 outline-none"
            value={newStickyTitle}
            onChange={(e) => setNewStickyTitle(e.target.value)}
          />

          <textarea
            placeholder="write something..."
            className="h-full w-full bg-transparent text-sm text-slate-400 outline-none"
            value={newStickyBody}
            onChange={(e) => setNewStickyBody(e.target.value)}
          />

          <button
            className="ml-auto mt-auto rounded-md bg-slate-500 px-3 py-1 text-xs text-white"
            onClick={() => {
              setSticky([
                ...sticky,
                {
                  id: uuid(),
                  title: newStickyTitle,
                  body: newStickyBody,
                  color: "amber",
                },
              ]);
              setNewStickyTitle("");
              setNewStickyBody("");
            }}
          >
            Done
          </button>
        </li>
      </ul>
    </main>
  );
}
