"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { getCurrentUser, logout } from "@/actions";
import { useState, useEffect } from "react";
import Options from "./ui/options";

const DashboardHeader = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getCurrentUser().then((user) => setUser(user));
  }, []);

  return (
    <nav className="sticky top-0 h-[10vh] flex justify-center  items-center z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between max-h-[10vh] items-center">
        <Link href="/">
          <h1 className="text-lg font-bold sm:inline-block">safeHerspace</h1>
        </Link>
        <div className="flex gap-4">
        <Options />
        <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
