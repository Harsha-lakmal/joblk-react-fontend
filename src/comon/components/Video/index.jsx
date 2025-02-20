"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          center
          mb="80px"
        />

        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[770px] overflow-hidden rounded-md" data-wow-delay=".15s">
              <div className="relative aspect-[77/40]">
                <Image src="/images/video/video.jpg" alt="video thumbnail" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    aria-label="Play video"
                    onClick={openModal}
                    className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-white bg-opacity-75 text-primary hover:bg-opacity-100 transition"
                  >
                    <svg width="16" height="18" viewBox="0 0 16 18" className="fill-current">
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={closeModal}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
