import Link from "next/link";

// interface BreadcrumbProps {
//   pageName: string;
//   description: string;
// }

const SvgBackground = () => {
  const svgProps = position === "left" 
    ? {
        width: "287",
        height: "254",
        viewBox: "0 0 287 254",
        d: "M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z",
        gradientId: "paint0_linear_111:578",
        gradientCoords: { x1: "-40.5", y1: "117", x2: "301.926", y2: "-97.1485" }
      }
    : {
        width: "628",
        height: "258",
        viewBox: "0 0 628 258",
        d: "M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z",
        gradientId: "paint0_linear_0:1",
        gradientCoords: { x1: "644", y1: "221", x2: "429.946", y2: "37.0429" }
      };

  return (
    <span className={`absolute ${position}-0 top-0 z-[-1]`}>
      <svg
        width={svgProps.width}
        height={svgProps.height}
        viewBox={svgProps.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path opacity="0.1" d={svgProps.d} fill={`url(#${svgProps.gradientId})`} />
        <defs>
          <linearGradient
            id={svgProps.gradientId}
            x1={svgProps.gradientCoords.x1}
            y1={svgProps.gradientCoords.y1}
            x2={svgProps.gradientCoords.x2}
            y2={svgProps.gradientCoords.y2}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};

const Breadcrumb = ({ pageName, description }) => {
  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
              <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                {pageName}
              </h1>
              <p className="text-base font-medium leading-relaxed text-body-color">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-5/12">
            <div className="text-end">
              <ul className="flex items-center md:justify-end">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className="pr-1 text-base font-medium text-body-color hover:text-primary"
                  >
                    Home
                  </Link>
                  <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                </li>
                <li className="text-base font-medium text-primary">
                  {pageName}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SvgBackground position="left" />
        <SvgBackground position="right" />
      </div>
    </section>
  );
};

export default Breadcrumb;
