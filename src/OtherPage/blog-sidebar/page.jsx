import React from "react";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  10 amazing sites to download stock photos & digital assets for
                  free
                </h1>

                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.8"
                    cx="37.5"
                    cy="37.5"
                    r="37.5"
                    fill="#4A6CF7"
                  />
                  <mask
                    id="mask0_111:596"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="75"
                    height="75"
                  >
                    <circle
                      opacity="0.8"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="#4A6CF7"
                    />
                  </mask>
                  <g mask="url(#mask0_111:596)">
                    <circle
                      opacity="0.8"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="url(#paint0_radial_111:596)"
                    />
                    <g opacity="0.8" filter="url(#filter0_f_111:596)">
                      <circle
                        cx="40.8089"
                        cy="19.853"
                        r="15.4412"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_111:596"
                      x="4.36768"
                      y="-16.5881"
                      width="72.8823"
                      height="72.8823"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="10.5"
                        result="effect1_foregroundBlur_111:596"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial_111:596"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                    >
                      <stop stopOpacity="0.47" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              <div className="items-center justify-between sm:flex">
                <div className="mb-5">
                  <h4 className="mb-3 text-sm font-medium text-body-color">
                    Popular Tags :
                  </h4>
                  <div className="flex items-center">
                    <TagButton text="Design" />
                    <TagButton text="Development" />
                    <TagButton text="Info" />
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                    Share this post :
                  </h5>
                  <div className="flex items-center sm:justify-end">
                    <SharePost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
