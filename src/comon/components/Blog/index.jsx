import React from "react";
import SectionTitle from "../Common/SectionTitle";  // Importing SectionTitle component
import SingleBlog from "./SingleBlog";  // Importing SingleBlog component
import blogData from "./blogData";  // Importing blog data

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        {/* Section Title */}
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center // This prop ensures the title is centered
        />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {/* Loop through the blogData array and render a SingleBlog component for each blog */}
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
