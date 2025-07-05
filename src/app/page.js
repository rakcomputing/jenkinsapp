"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login attempt:", { username, password });

    // Example: Basic validation
    if (username && password) {
      alert(`Welcome, ${username}!`);
      // Here you would typically make an API call to authenticate
      // Example: router.push('/dashboard') after successful login
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div className=" mt-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome to OS Jenkins App
        </h1>

        <form
          onSubmit={handleLogin}
          className="bg-green-100 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 border border-gray-200"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-200"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 text-xs">
          Enter your Jenkins credentials to continue
        </p>
      </div>
    </div>
  );
}
