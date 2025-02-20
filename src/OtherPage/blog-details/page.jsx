import React from "react";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";

const BlogDetailsPage = () => {
  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              {/* Blog Title */}
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                10 Amazing Sites to Download Stock Photos & Digital Assets for Free
              </h2>

              {/* Blog Header (Author, Date, Comments) */}
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 mr-10 flex items-center">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src="/images/blog/author-02.png"
                          alt="author"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <span className="mb-1 text-base font-medium text-body-color">
                        By <span>Musharof Chy</span>
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center">
                    <p className="mr-5 flex items-center text-base font-medium text-body-color">
                      <span className="mr-3">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          className="fill-current"
                        >
                          <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                          {/* More SVG Paths */}
                        </svg>
                      </span>
                      12 Jan 2024
                    </p>
                    <p className="mr-5 flex items-center text-base font-medium text-body-color">
                      <span className="mr-3">
                        <svg
                          width="18"
                          height="13"
                          viewBox="0 0 18 13"
                          className="fill-current"
                        >
                          {/* SVG Paths for Views */}
                        </svg>
                      </span>
                      50
                    </p>
                    <p className="flex items-center text-base font-medium text-body-color">
                      <span className="mr-3">
                        <svg
                          width="20"
                          height="12"
                          viewBox="0 0 20 12"
                          className="fill-current"
                        >
                          {/* SVG Paths for Likes */}
                        </svg>
                      </span>
                      35
                    </p>
                  </div>
                </div>
                {/* Tag Button */}
                <div className="mb-5">
                  <TagButton label="Design" />
                </div>
              </div>

              {/* Blog Content */}
              <div>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                {/* Blog Image */}
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src="/images/blog/blog-details-02.jpg"
                      alt="Blog image"
                      layout="fill"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                
                {/* Further Blog Content */}
                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                  Digital Marketplace for UI/UX Designers
                </h3>
                <ul className="mb-10 list-inside list-disc text-body-color">
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Consectetur adipiscing elit in voluptate velit.
                  </li>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Mattis vulputate cupidatat.
                  </li>
                  {/* More List Items */}
                </ul>

                {/* Quote Box */}
                <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                  <p className="text-center text-base font-medium italic text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>
            </div>

            {/* Share Post Component */}
            <SharePost />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
