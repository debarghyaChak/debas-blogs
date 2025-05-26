import React from 'react';
import {  buttonVariants } from "@/components/ui/button";
import Link from 'next/link'
import fs from "fs";
import matter from 'gray-matter';


const dirContent = fs.readdirSync("content","utf-8");
console.log(dirContent);
const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const {data} = matter(fileContent);
  return data

})

const Blog = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg shadow-purple-300 dark:shadow-purple-900 overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-80  object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <p className="text-gray-500 text-sm mt-2">{`By ${blog.author} on ${new Date(blog.date).toLocaleDateString()}`}</p>
              
              <Link href={`/blogpost/${blog.slug}`} className={`${buttonVariants({variant:'outline'})} mt-2 hover:border-2 hover:border-purple-500`}>Click here</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
