"use client";

import Link from "next/link";
import { useState } from "react";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin() {
    const { email, password } = loginData;

    if (!email || !password) {
      console.log("All fields must be filled");
      return;
    }

    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <main className="space-y-4">
      <div className="text-center space-y-1 pb-3">
        <h1>Login</h1>
        <p className="text-gray-600">Please login to your account</p>
      </div>
      <input
        name="email"
        placeholder="email@domain.com"
        onChange={handleChangeInput}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChangeInput}
      />
      <button onClick={handleLogin}>Login</button>
      <div className="space-y-2 text-md text-gray-600">
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-600">
            {" "}
            Sign up
          </Link>
        </p>
        <p>
          Back to{" "}
          <Link href="/" className="text-blue-600">
            {" "}
            home
          </Link>
        </p>
      </div>
    </main>
  );
};
