import React from "react";
import { Blog } from "@/types/blog";

// Blog data
const blogData = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];

const BlogList = () => {
  return (
    <div className="blog-list">
      {blogData.map((blog) => (
        <div key={blog.id} className="blog-item">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-paragraph">{blog.paragraph}</p>
          <div className="author-info">
            <img
              src={blog.author.image}
              alt={blog.author.name}
              className="author-image"
            />
            <div>
              <p className="author-name">{blog.author.name}</p>
              <p className="author-designation">{blog.author.designation}</p>
            </div>
          </div>
          <div className="blog-tags">
            {blog.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="publish-date">Published on: {blog.publishDate}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
