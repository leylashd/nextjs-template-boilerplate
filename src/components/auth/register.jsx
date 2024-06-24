"use client";

import { useState } from "react";
import Link from "next/link";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    const { firstName, lastName, username, email, password } = registerData;

    if (!firstName || !lastName || !username || !email || !password) {
      console.log("All fields must be filled");
      return;
    }

    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <main className="space-y-5">
      <div className="text-center space-y-1 pb-3">
        <h1>Register</h1>
        <p className="text-gray-600">Please fill this form to register</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          name="firstName"
          placeholder="First name"
          onChange={handleChangeInput}
        />
        <input
          name="lastName"
          placeholder="Last name"
          onChange={handleChangeInput}
        />
      </div>
      <input
        name="username"
        placeholder="username"
        onChange={handleChangeInput}
      />
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
      <button onClick={handleRegister}>Register</button>
      <div className="space-y-2 text-md text-gray-600">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600">
            {" "}
            Sign in
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
