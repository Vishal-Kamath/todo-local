import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/lib";
import Header from "@/components/header/header";

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
        className={cn(
          montserrat.className,
          "grid min-h-screen grid-cols-1 md:grid-cols-[15rem,1fr] lg:grid-cols-[20rem,1fr]",
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
