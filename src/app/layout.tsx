import { ReactNode } from "react";
import "./global.css";
import { Inter } from "next/font/google";
import ClientSessionProvider from "../app/components/ClientSessionProvider";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Tutor",
  description: "자기주도학습을 위한 AI Tutor 서비스",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSessionProvider>{children}</ClientSessionProvider>
      </body>
    </html>
  );
}