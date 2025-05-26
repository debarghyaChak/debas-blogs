"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the form data to the API endpoint
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.status === 201) {
      alert("User registered successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        mobileNo: "",
        password: "",
        confirmPassword: ""
      });
    } else {
      alert(result.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 dark:bg-gray-900">
        <div className="w-full max-w-4xl p-8 dark:bg-black shadow-lg shadow-purple-300 dark:shadow-purple-900 rounded-lg">
          <div className="w-full flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Sign Up
            </h1>
            <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
              Create a new account by filling out the form below.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-800 dark:text-white font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-800 dark:text-white font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="dob"
                    className="block text-gray-800 dark:text-white font-medium"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="w-full md:w-1/2">
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
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mobileNo"
                  className="block text-gray-800 dark:text-white font-medium"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNo"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

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

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-800 dark:text-white font-medium"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <Button
                type="submit"
                className="mt-4 inline-block px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 hover:transform transition-transform duration-300 hover:scale-105"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
