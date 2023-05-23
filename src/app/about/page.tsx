/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/footer/Footer";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="absolute top-0 -z-10 w-[100%] font-poppins">
        <div>
          <div className="relative md:h-[62.5rem] h-[41.5rem]">
            <div>
              <img
                src="burble/about.png"
                alt="id"
                className=" object-cover md:h-[62.5rem] h-[41.5rem] w-[100%]"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black px-10 py-16 flex flex-col gap-5 ">
            <h1 className="text-white text-2xl leading-10">BURBLE is a Saudi multidisciplinary creative hub, based in Riyadh. We transform ordinary spaces into extraordinary ones, turning them into platforms that host our ORIGINAL PROGRAMS, focusing on exhibitions in art, fashion, jewelry, and food, as well as courses, workshops, various talks, pop-ups, and short films. In many instances, we collaborate with local and international professionals and organizations, too, thereby forming an all-inclusive,  all-encompassing experience. </h1>
            <h1 className="text-white text-2xl leading-10">In doing so, we give rise to a BURBLE community.</h1>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
