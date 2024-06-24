import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-3 py-4 bg-slate-200">
      <div className="font-bold">Brand.</div>
      <div className="flex justify-center items-center gap-3">
        <h3>Menu 1</h3>
        <h3>Menu 2</h3>
        <h3>Menu 3</h3>
        <h3>Menu 4</h3>
        <Link href="/login">
          <button className="button-secondary">Login</button>
        </Link>
      </div>
    </header>
  );
};
