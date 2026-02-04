import { ReactElement, ReactNode } from "react";

import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import RevealProvider from "@/providers/reveal.provider";

import "./globals.css";
import "./reveal.css";

const worksans = Work_Sans({ subsets: ["latin"], variable: "--font-worksans" });

export const metadata: Metadata = {
  title: "What Is Rest API?",
  description: "What Is Rest API? by BijanProgrammer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement {
  return (
    <html lang="en" className={worksans.variable}>
      <body>
        <RevealProvider>{children}</RevealProvider>
      </body>
    </html>
  );
}
