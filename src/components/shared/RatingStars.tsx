// components/RatingStars.tsx
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (
          <AiFillStar key={index} className="text-[#1E91B6]" />
        ) : (
          <AiOutlineStar key={index} className="text-gray-400" />
        );
      })}
    </div>
  );
};

export default RatingStars;
