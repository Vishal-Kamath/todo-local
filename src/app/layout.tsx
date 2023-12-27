import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/lib";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(montserrat.className, "flex flex-col gap-3 px-padding")}
      >
        <header className="py-4">
          <h1 className="text-2xl font-bold text-indigo-800">todo</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
