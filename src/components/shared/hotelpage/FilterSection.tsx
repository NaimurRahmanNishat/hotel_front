import { useState } from "react";
import Title from "../Title";

const FilterSection = () => {
  const [price, setPrice] = useState<number>(500);
  const [selectedRating, setSelectedRating] = useState<number | null>(null); // ⭐ rating state

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating === selectedRating ? null : rating); // toggle rating
  };

  return (
    <div className="sticky top-0 w-full">
      <Title title="Filter" />

      {/* Price Range */}
      <div className="pt-6 md:pt-10 w-full">
        <label htmlFor="priceRange" className="block font-semibold mb-1">
          Price
        </label>
        <input
          id="priceRange"
          type="range"
          min="0"
          max="20000"
          step="100"
          value={price}
          onChange={handlePriceChange}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-sm font-medium text-gray-700 mt-1">
          <span className="font-semibold text-gray-600">৳{price}</span>
          <span>৳20000</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-0.5 w-full bg-gray-200 mt-10"></div>

      {/* Rating */}
      <div className="pt-3">
        <h3 className="text-md font-semibold">Rating</h3>
        <div className="mt-2 flex gap-3 flex-wrap">
          {[1, 2, 3, 4, 5].map((rating) => {
            const isSelected = selectedRating === rating;
            return (
              <div
                key={rating}
                onClick={() => handleRatingClick(rating)}
                className={`flex items-center p-2 border rounded cursor-pointer 
                  ${
                    isSelected
                      ? "bg-[#1E91B6] text-white border-[#1E91B6]"
                      : "border-[#1E91B6] text-[#1E91B6]"
                  }`}
              >
                <label className="text-sm">{rating}+</label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="h-0.5 w-full bg-gray-200 mt-10"></div>

      {/* Freebies */}
      <div className="pt-3">
        <h3 className="text-md font-semibold">Freebies</h3>
        <div>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" />
            <label htmlFor="breakfast">Free breakfast</label>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" />
            <label htmlFor="parking">Free parking</label>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" />
            <label htmlFor="internet">Free internet</label>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" />
            <label htmlFor="airport">Free airport shuttle</label>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" />
            <label htmlFor="cancellation">Free cancellation</label>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-0.5 w-full bg-gray-200 mt-10"></div>

      {/* Amenities */}
      <div className="pt-3">
        <h3 className="text-md font-semibold">Amenities</h3>
        <div>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" />
            <label htmlFor="frontdesk">24hr front desk</label>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" />
            <label htmlFor="conditioned">Air conditioned</label>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" />
            <label htmlFor="Fitness">Fitness</label>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" />
            <label htmlFor="Pool">Pool</label>
          </div>
          <p className="text-base font-semibold text-[#1E91B6]">+24 more</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
