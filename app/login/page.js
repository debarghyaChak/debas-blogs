"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use useRouter from next/navigation
import { Button } from "@/components/ui/button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter(); // Define the useRouter hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response text:', errorText);
        setError(errorText || 'Network response was not ok');
        return;
      }

      const result = await response.json();
      console.log('Parsed Response:', result);

      if (response.status === 200) {
        localStorage.setItem('token', result.token);
        setSuccess(true);
        // Perform the redirection here
        router.push('/dashboard');
      } else {
        setError(result.error || 'Something went wrong');
      }
    } catch (error) {
      setError(error.message || 'Something went wrong');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-32 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 dark:bg-black shadow-lg shadow-purple-300 dark:shadow-purple-900 rounded-lg">
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Login
          </h1>
          <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
            Log in to your account by filling out the form below.
          </p>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 dark:text-white font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-800 dark:text-white font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Links for Forgot Password and Sign Up */}
            <div className="flex justify-between items-center mb-6">
              <Link
                href="/forgot-password"
                className="text-sm text-purple-500 hover:text-purple-700"
              >
                Forgot password?
              </Link>
              <Link
                href="/signup"
                className="text-sm text-purple-500 hover:text-purple-700"
              >
                New user? Sign Up!
              </Link>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 text-red-500">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="mt-4 inline-block px-6 py-2.5 bg-purple-600 text-white rounded hover:bg-purple-700 hover:transform transition-transform duration-300 hover:scale-105"
              >
                Login
              </Button>
            </div>
          </form>
          {success && <Link href="/dashboard">Redirecting to Dashboard...</Link>}
        </div>
      </div>
    </div>
  );
};

export default Login;
