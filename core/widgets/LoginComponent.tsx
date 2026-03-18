"use client";

import Link from "next/link";
import { useState } from "react";
import { getUser } from "../clients/GetUserService";
import { request } from "http";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    const request: loginUserRequest = {
      email,
      password,
    }

    const response = await getUser.loginUser(request);

    console.log('@@@',response);
    window.location.href = "/"; // Redirect to home page on successful login

  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-xl">
        
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full bg-black border border-zinc-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-white transition"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400 block mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full bg-black border border-zinc-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-white transition"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-zinc-500 text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-white cursor-pointer hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}