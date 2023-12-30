import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/lib";
import Header from "@/components/header/header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "todo",
  description:
    "Welcome to the Todo Website! This is a web application built using Next 13, Tailwind CSS, that allows you to store todo data in localstorage. It is project I created while learning Git flow",

  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Todo", "PWA"],
  authors: [{ name: "Vishal Kamath", url: "https://github.com/Vishal-Kamath" }],
  creator: "Vishal Kamath",

  // Favicons
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", type: "image/png" }],
    other: [
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  // Pwa manifest
  manifest: "/manifest.webmanifest",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    title: "todo",
    statusBarStyle: "black-translucent",
  },
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
          "grid min-h-screen grid-cols-1 max-md:grid-rows-[5rem,1fr] md:grid-cols-[15rem,1fr] lg:grid-cols-[20rem,1fr]",
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
