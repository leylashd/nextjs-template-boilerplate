import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="w-full h-screen flex justify-center items-center ">
      <div className="w-[400px] border border-indigo-500 bg-slate-300 px-6 py-10 rounded-xl text-center">
        <div>{children}</div>
      </div>
    </main>
  );
};
