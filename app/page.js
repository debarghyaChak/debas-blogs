"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "Software Engineering",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Cybersecurity",
        "DevOps",
        "Cloud Computing",
        "Blockchain",
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
        "Mobile App Development",
        "Game Development",
        "UI/UX Design",
        "Data Analysis",
        "Big Data",
        "API Development",
        "API Integration",
        "Web Design",
        "Graphic Design",
        "Animation",
        "3D Modeling",
        "Game Design",
        "Virtualization",
        "Containerization",
        "CI/CD",
        "Automation",
        "Scripting",
        "Programming Languages",
        "Algorithms",
        "Data Structures",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main>
      <section className="container-fluid px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center bg-white dark:bg-gray-900">
        <div className="w-full text-center px-12 lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">Free Blogs</span> for developers,{" "}
            <br className="hidden lg:block" /> updated blogs on tech-subjects
            like{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
            {"."}
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Developed by yours truly, Debarghya Chakravarty,{" "}
            <br className="hidden lg:block" /> Software Developer and tech
            enthusiast!
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-xl mx-auto"
          />
        </div>
      </section>
      {/* <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
            Pricing Plans
          </h2>
          <div className="flex flex-col md:flex-row justify-center overflow-x-hidden">
            <div className="bg-white dark:bg-black shadow-lg shadow-purple-300 dark:shadow-purple-900 rounded-lg p-6 m-4 w-11/12 md:w-1/3 flex flex-col mx-auto md:mx-4 hover:transform transition-transform duration-300 hover:scale-105 ">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Basic
              </h3>
              <p className="text-2xl font-bold mb-4 text-black dark:text-white">
                $19/month
              </p>
              <ul className="mb-4 flex-grow text-black dark:text-gray-300">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <Button className="mx-1">Select Plan</Button>
            </div>
            <div className="bg-white dark:bg-black shadow-lg shadow-purple-300 dark:shadow-purple-900 rounded-lg p-6 m-4 w-11/12 md:w-1/3 flex flex-col mx-auto md:mx-4 hover:transform transition-transform duration-300 hover:scale-105 relative border-2 border-purple-500">
              <span className="absolute top-0 right-0 bg-transparent text-purple-500 text-xs font-bold py-1 px-2 rounded-bl-lg">
                Bestseller
              </span>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Standard
              </h3>
              <p className="text-2xl font-bold mb-4 text-black dark:text-white">
                $39/month
              </p>
              <ul className="mb-4 flex-grow text-black dark:text-gray-300">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <Button className="mx-1">Select Plan</Button>
            </div>


            <div className="bg-white dark:bg-black shadow-lg shadow-purple-300 dark:shadow-purple-900 rounded-lg p-6 m-4 w-11/12 md:w-1/3 flex flex-col mx-auto md:mx-4 hover:transform transition-transform duration-300 hover:scale-105 ">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Premium
              </h3>
              <p className="text-2xl font-bold mb-4 text-black dark:text-white">
                $59/month
              </p>
              <ul className="mb-4 flex-grow text-black dark:text-gray-300">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <Button className="mx-1">Select Plan</Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-12 bg-white dark:bg-gray-900 pt-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900 dark:bg-black transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "This service has been a game-changer for our business. Highly
                  recommend!"
                </p>
                <h3 className="mt-4 text-xl font-semibold text-purple-500 dark:text-purple-500">
                  John Doe
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  CEO, Company A
                </p>
              </div>
            </div>
           
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900 dark:bg-black transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "Amazing experience! The team was professional and the results
                  were outstanding."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-purple-500 dark:text-purple-500">
                  Jane Smith
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  Marketing Director, Company B
                </p>
              </div>
            </div>
            
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900 dark:bg-black transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "Exceptional service and support. We couldn't be happier with
                  the results."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-purple-500 dark:text-purple-500">
                  Michael Brown
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  CTO, Company C
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Check out our most popular blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900 dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="/blog1.webp"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Cloud Computing for Beginners
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Basics of cloud computing
                  </p>
                  <Link href="/blog">
                    <Button
                      className="m-2 hover:border-2 hover:border-purple-500"
                      variant="outline"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900 dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="css.jpg"
                  alt="Blog 2"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    CSS tutorial for beginners
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    This is an easy CSS tutorial for beginners
                  </p>
                  <Link href="/blog">
                    <Button
                      className="m-2 hover:border-2 hover:border-purple-500"
                      variant="outline"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900 dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="react.jpeg"
                  alt="Blog 3"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    React vs Next.JS
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Major differences between React and NextJS
                  </p>
                  <Link href="/blog">
                    <Button
                      className="m-2 hover:border-2 hover:border-purple-500"
                      variant="outline"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
