// components/Testimonials.tsx
import React from "react";
import heroOne from "../../../assets/manOne.jpg";
import heroTwo from "../../../assets/manTwo.jpg";
import RatingStars from "../RatingStars";

const Testimonials: React.FC = () => {
  return (
    <section className="w-full px-4 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-Montserrat font-semibold text-center mb-12 text-gray-900">
        Don&apos;t just take our words
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img
            src={heroOne}
            alt="Resort"
            width={245}
            height={239}
            className="rounded-md object-cover"
          />
          <div className="flex flex-col gap-3">
            <RatingStars rating={4} />
            <p className="text-gray-700 text-[15px]">
              "We love Landingfolio! Our designers were using it for their
              projects, so we already knew what kind of design they want."
            </p>
            <h4 className="font-semibold text-gray-900">Jenny Wilson</h4>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img
            src={heroTwo}
            alt="Resort"
            width={245}
            height={239}
            className="rounded-md object-cover"
          />
          <div className="flex flex-col gap-3">
            <RatingStars rating={5} />
            <p className="text-gray-700 text-[15px]">
              "The booking process was super smooth. I found the best hotels
              and had a wonderful experience during my vacation."
            </p>
            <h4 className="font-semibold text-gray-900">Arif Rahman</h4>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
