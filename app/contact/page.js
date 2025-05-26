import React from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-white dark:bg-gray-900">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg shadow-purple-300 dark:shadow-purple-900 rounded-lg mx-4 md:mx-0">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-56 h-56 rounded-full overflow-hidden">
                <img
                  src="/dp2.jpg" // Replace with your image
                  alt="Profile"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Contact Me
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Have a question or just want to get in touch? Fill out the form
                below, and I’ll get back to you as soon as possible!
              </p>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-gray-800 dark:text-white font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="query"
                    className="block text-gray-800 dark:text-white font-medium"
                  >
                    Your Query
                  </label>
                  <textarea
                    id="query"
                    name="query"
                    rows="5"
                    required
                    className="mt-2 p-3 w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Write your query here..."
                  ></textarea>
                </div>
                <Button
                  type="button"
                  className="mt-4 block mx-auto px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 hover:transform transition-transform duration-300 hover:scale-105 text-center"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
