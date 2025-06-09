import React from "react";
import BlogCard from "./BlogCard";
import { BlogList } from "@/constant/constant";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      {/* heading section */}
      <div className="text-center">
        {/* subheading */}
        <h1 className="uppercase text-lg sm:text-xl md:text-2xl font-bold text-blue-700  dark:text-pink-500">
          Latest Blog
        </h1>
        {/* heading */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mt-1">
          Read our latest blog for the <br /> latest updates
        </h1>
      </div>
      {/* body */}
      <div className="w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          // mapping cards
          BlogList.map((item) => (
            <div key={item.id}>
              <BlogCard image={item.image} title={item.title} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Blog;
