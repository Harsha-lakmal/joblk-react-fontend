import React from "react";

// Define prop types for clarity (optional but recommended in React)
// interface RelatedPostProps {
//   image: string;
//   slug: string;
//   title: string;
//   date: string;
// }

const RelatedPost =  ({ image, slug, title, date }) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      {/* Image Container */}
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      </div>
      
      {/* Post Info */}
      <div className="w-full">
        <h5>
          <a
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </a>
        </h5>
        <p className="text-xs font-medium text-body-color">{date}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
