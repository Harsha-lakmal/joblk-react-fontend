"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ logoDark, logoLight, socialLinks, usefulLinks, termsLinks, supportLinks }) => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src={logoLight}
                  alt="logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src={logoDark}
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex items-center">
                {socialLinks.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">Useful Links</h2>
              <ul>
                {usefulLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Terms */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">Terms</h2>
              <ul>
                {termsLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">Support & Help</h2>
              <ul>
                {supportLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            Template by{" "}
            <a href="http://uideck.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              UIdeck
            </a>{" "}
            and{" "}
            <a href="https://nextjstemplates.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              Next.js Templates
            </a>
          </p>
        </div>
      </div>

      {/* SVG Backgrounds */}
      <div className="absolute right-0 top-14 z-[-1]">{/* Your SVG code */}</div>
      <div className="absolute bottom-24 left-0 z-[-1]">{/* Your SVG code */}</div>
    </footer>
  );
};

export default Footer;
