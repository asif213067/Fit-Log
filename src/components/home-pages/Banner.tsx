import React from "react";
import Image from "next/image";
import bannerImg from '@/assets/banner.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="container mx-auto my-8 px-4 lg:px-8">
      <div className="overflow-hidden rounded-xl border border-[#1f2228] bg-[#15171c]">
        <div className="flex min-h-75 flex-col items-center justify-between gap-8 px-6 py-10 sm:px-10 md:flex-row md:px-10 md:py-12">
          
          {/* Left Content */}
          <div className="relative z-10 w-full max-w-2xl">
            
            {/* Eyebrow */}
            <p className="mb-4 text-[9px] font-bold uppercase tracking-widest text-[#aaff00]">
              Workout Library
            </p>

            {/* Main Heading */}
            <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#f5f5f5] sm:text-5xl md:text-[48px] lg:text-[40px]">
              Train with intent. Log <br /> every set.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-md text-xs leading-5 text-[#8d9199] sm:text-[13px]">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today&apos;s plan, and watch the week&apos;s work
              add up.
            </p>

            {/* CTA */}
            <a
              href="#library"
              className="mt-6 inline-flex h-9 items-center gap-2 rounded-md bg-[#aaff00] px-5 text-[10px] font-bold uppercase text-[#0b0d08] transition-colors duration-150 hover:bg-[#b9ff33] active:scale-95"
            >
              <span>Browse Workouts</span>

              {/* Arrow Icon */}
              <FaArrowRightLong />
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative flex w-full items-center justify-center md:w-[38%] md:justify-end">
            <Image
              src={bannerImg}
              alt="Workout illustration"
              width={300}
              height={300}
              priority
              className="h-52 w-auto object-contain sm:h-60 md:h-64 lg:h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;