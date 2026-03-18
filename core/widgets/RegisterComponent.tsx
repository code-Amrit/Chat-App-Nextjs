"use client";

import Link from "next/link";
import { useState } from "react";
import { getUser } from "../clients/GetUserService";

export default function RegisterComponent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const request : registerUserRequest = {
      name: form.name,
      email: form.email,
      password: form.password,
    }
    console.log(form);
    const response = await getUser.registerUser(request);
    console.log("@@@", response);
    window.location.href = "/auth/login";

  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-xl">

        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-white transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-zinc-500 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link href={"/auth/login"} className="text-white cursor-pointer hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}