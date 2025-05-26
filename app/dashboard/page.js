"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use useRouter from next/navigation
import withAuth from "@/hoc/withAuth";
import { Button } from "@/components/ui/button";
import { Editor } from "@tinymce/tinymce-react"; // Import the TinyMCE editor

const Dashboard = () => {
  const [firstName, setFirstName] = useState(""); // State to store the first name
  const [mainContent, setMainContent] = useState(""); // State to store the main content
  const router = useRouter(); // Define the useRouter hook

  useEffect(() => {
    const fetchFirstName = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setFirstName(data.firstName);
    };

    fetchFirstName();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center py-32 dark:bg-gray-900">
      <div className="w-full max-w-4xl p-8 dark:bg-black shadow-lg shadow-purple-300 dark:shadow-purple-900 rounded-lg">
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome, {firstName}!
          </h1>
          <form className="mt-8">
            {/* Title */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-800 dark:text-white font-medium"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-800 dark:text-white font-medium"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                required
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* Slug */}
            <div className="mb-4">
              <label
                htmlFor="slug"
                className="block text-gray-800 dark:text-white font-medium"
              >
                Slug
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                required
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* Date */}
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-gray-800 dark:text-white font-medium"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* Author */}
            <div className="mb-4">
              <label
                htmlFor="author"
                className="block text-gray-800 dark:text-white font-medium"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {/* Image URL */}
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-800 dark:text-white font-medium"
              >
                Image URL
              </label>
             <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
/>
            </div>
            {/* Main Content */}
            <div className="mb-4">
              <label
                htmlFor="mainContent"
                className="block text-gray-800 dark:text-white font-medium"
              >
                Main Content
              </label>
              <Editor
                apiKey="7ceyxszztf05gytn6zzryq37xdv0odcn89ld5u5fke3st9z2"
                init={{
                  plugins: [
                    // Core editing features
                    "anchor",
                    "autolink",
                    "charmap",
                    "codesample",
                    "emoticons",
                    "image",
                    "link",
                    "lists",
                    "media",
                    "searchreplace",
                    "table",
                    "visualblocks",
                    "wordcount"                    
                  ],
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
                  ai_request: (request, respondWith) =>
                    respondWith.string(() =>
                      Promise.reject("See docs to implement AI Assistant")
                    ),
                }}
                className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                style={{ minHeight: '300px' }} // Added style to ensure CSS classes are applied correctly
              />
            </div>
            <div className="flex flex-col items-center">
              <Button
                type="submit"
                className="mb-4 px-4 py-2.5 bg-purple-600 text-white rounded hover:bg-purple-700 hover:transform transition-transform duration-300 hover:scale-105"
              >
                Submit Blog
              </Button>
              <Button
                type="button"
                className="px-4 py-2.5 bg-purple-600 text-white rounded hover:bg-purple-700 hover:transform transition-transform duration-300 hover:scale-105"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
