"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Replace with the actual path to your CV
    link.download = 'CV.pdf'; // The name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
 
  
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center py-32 bg-white dark:bg-gray-900 ">
          <div className="w-full max-w-4xl p-8 bg-white dark:bg-black shadow-lg shadow-purple-300 dark:shadow-purple-900 rounded-lg">
            <div className="flex flex-col md:flex-row ">
              <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image
                    src="/dp2.jpg"
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center ">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white  mb-4">
                  About Me
                </h1>
                <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                  Hello! I'm Deba, a passionate software developer and tech
                  enthusiast with a degree from the Manipal Institute of
                  Technology. With over a year of experience as a developer at
                  Nishant Infosys, I've worked extensively with ASP.NET, C#, and
                  MS-SQL, building and maintaining robust applications.
                </p>
                <p className="text-gray-600 dark:text-gray-50 text-lg">
                  I created this blog to cater to beginner techies and fellow
                  tech enthusiasts, providing tutorials, tips, and insights into
                  programming and technology. It also serves as a demonstration
                  of my skills as a full-stack developer, showcasing my ability
                  to create and manage engaging and functional web applications.
                  Let's embark on this exciting journey through the world of
                  coding together!
                </p>
                {/* <a href="/path/to/your/cv.pdf" download className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Download My CV
              </a> */}
                <Button
                  className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 hover:transform transition-transform duration-300 hover:scale-105"
                  onClick={downloadCV}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                My Journey as a developer
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
                From someone with little coding background, here is how I
                transitioned my career from Digital marketing and customer
                support to tech.
              </p>
            </div>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3">
                  <img
                    src="/about1.webp"
                    alt="Harry as a beginner"
                    className="w-full rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900"
                  />
                </div>
                <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white dark:text-white">
                    Basics of web development:
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-50">
                    Starting with the basics of HTML, CSS, and JavaScript, I
                    gradually uncovered the building blocks of web development.
                    From structuring web pages with HTML to styling them with
                    CSS and adding interactivity with JavaScript, I learned how
                    to design and code responsive websites that are both
                    functional and visually appealing. This foundation sparked
                    my curiosity and set me on an exciting path to mastering the
                    art of web development.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/3">
                  <img
                    src="/about2.webp"
                    alt="Harry learning new skills"
                    className="w-full rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900"
                  />
                </div>
                <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    OOP using JAVA:
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-50">
                    Building on my basic knowledge of Java from high school, I
                    delved deeper into the core concepts of object-oriented
                    programming (OOP). This journey helped me understand
                    fundamental principles like encapsulation, inheritance,
                    polymorphism, and abstraction, enabling me to write more
                    structured and efficient code. Java served as the perfect
                    language to solidify my grasp of OOP and its real-world
                    applications.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3">
                  <img
                    src="/about3.svg"
                    alt="Harry working on a big project"
                    className="w-full rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900"
                  />
                </div>
                <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Front end frameworks:
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-50">
                    I explored front-end frameworks and gained expertise in
                    React, one of the most in-demand front-end technologies.
                    Alongside React, I also learned Next.js, which simplifies
                    server-side rendering and static site generation for better
                    performance and SEO. This website is built using Next.js,
                    showcasing my ability to create modern, efficient, and
                    user-friendly web applications.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/3">
                  <img
                    src="/about4.png"
                    alt="Harry mentoring others"
                    className="w-full rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900"
                  />
                </div>
                <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Backend and DSA:
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-50">
                    Building on my knowledge of Java and JavaScript, I began
                    learning backend frameworks like Spring and Node.js. These
                    frameworks allowed me to create robust server-side
                    applications and APIs, expanding my expertise in backend
                    development. Alongside this, I deepened my understanding of
                    Data Structures and Algorithms (DSA), which helped me write
                    efficient and optimized code for complex problem-solving.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3">
                  <img
                    src="/about5.webp"
                    alt="Harry working on a big project"
                    className="w-full rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900"
                  />
                </div>
                <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Cracking a tech job:
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-50">
                    With a solid foundation in various technologies and
                    concepts, I prepared my CV and began applying to companies.
                    My efforts paid off when I received an interview call from
                    Nishant Infosys Kolkata. Leveraging my skills and knowledge,
                    I successfully cracked the interview and secured a position
                    as a developer, marking the beginning of my professional
                    journey in the tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
