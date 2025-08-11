import FilterSection from "./FilterSection";
import HotelCardSection from "./HotelCardSection";
import SearchHotel from "./SearchHotel";

const Search = () => {
  return (
    <div className="box-container py-7 md:py-12">
      <SearchHotel />
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 pt-10">
        {/* filter section  */}
        <div className="w-full md:w-[20%]">
          <FilterSection />
        </div>

        {/* hotel card section right side */}
        <div className="w-full md:w-[80%]">
          <div className="space-y-6 pb-4">
            {/* Top bar with result info and sorting */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
              {/* Showing result text */}
              <h4 className="text-sm md:text-base text-gray-700 font-Montserrat font-medium">
                Showing <span className="font-semibold text-blue-600">5</span>{" "}
                of{" "}
                <span className="font-semibold text-red-400">257 places</span>
              </h4>
              {/* Sorting dropdown */}
              <div className="w-full md:w-auto mr-4">
                <select
                  name="sort"
                  id="sort"
                  className="w-full md:w-[200px] px-1 py-2 border border-gray-300 rounded-md text-sm text-gray-700 outline-none transition-all"
                >
                  <option value="default">Default</option>
                  <option value="custom">Custom</option>
                  <option value="relevance">Relevance</option>
                  <option value="recent">Most Recent</option>
                  <option value="lowest">Lowest Price</option>
                  <option value="highest">Highest Price</option>
                </select>
              </div>
            </div>
          </div>
          <HotelCardSection />
          <button className="bg-black hover:bg-[#1E91B6] text-white px-4 py-2 rounded-md mt-4 w-full cursor-pointer">Search more hotels</button>
        </div>
        
      </div>
    </div>
  );
};

export default Search;
