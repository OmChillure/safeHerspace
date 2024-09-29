"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { getCurrentUser, logout } from "@/actions";
import { useState, useEffect } from "react";

const SiteHeader = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getCurrentUser().then((user) => setUser(user));
  }, []);

  return (
    <nav className="sticky top-0 h-[10vh] flex justify-center items-center z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between max-h-[10vh] items-center">
        <Link href="/">
          <h1 className="text-lg mr-4 font-bold sm:inline-block">Repoto</h1>
        </Link>
        <div className="flex justify-center items-center">
          <div className="lg:flex md:hidden items-center gap-10">
          </div>
        </div>
        <div className="flex gap-1">
          <ModeToggle />
          {user ? (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
          {user && <Button onClick={() => logout()}>Logout</Button>}
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
