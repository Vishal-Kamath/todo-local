"use client";

import { cn } from "@/utils/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { FaNoteSticky, FaRegNoteSticky } from "react-icons/fa6";

const Header: FC = () => {
  const activeLink = usePathname();

  return (
    <header className="flex h-fit gap-6 border-neutral-300 bg-neutral-50 p-6 max-md:border-b-2 md:h-full md:flex-col md:border-r-1">
      <h1 className="text-2xl font-semibold text-neutral-700">todo</h1>

      <nav className="flex gap-2 max-md:ml-auto md:flex-col">
        <Link
          href="/home"
          className={cn(
            "hover:bg-sky-0 flex items-center gap-3 rounded-md border-1 border-transparent px-3 py-2 hover:border-neutral-400 hover:text-neutral-800",
            activeLink !== "/sticky"
              ? "bg-neutral-200 text-neutral-800"
              : "text-neutral-500",
          )}
        >
          {activeLink !== "/sticky" ? <AiFillHome /> : <AiOutlineHome />}
          <span className="max-md:hidden">Home</span>
        </Link>
        <Link
          href="/sticky"
          className={cn(
            "hover:bg-sky-0 flex items-center gap-3 rounded-md border-1 border-transparent px-3 py-2 hover:border-neutral-400 hover:text-neutral-800",
            activeLink === "/sticky"
              ? "bg-neutral-200 text-neutral-800"
              : "text-neutral-500",
          )}
        >
          {activeLink === "/sticky" ? <FaNoteSticky /> : <FaRegNoteSticky />}
          <span className="max-md:hidden">Sticky Notes</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
