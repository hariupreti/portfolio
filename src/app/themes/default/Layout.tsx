"use-client";
import React from "react";
import Link from "next/link";
import { routes } from "../../routes";
import Header from "@/app/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="theme-default">
      <header>
        <Header></Header>
      </header>
      <main>{children}</main>
      <footer>© 2025 My Portfolio</footer>
    </div>
  );
}
