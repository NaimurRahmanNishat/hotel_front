import { FaBed } from "react-icons/fa6";

const SearchHotel = () => {
  return (
    <div>
      <div className="px-5 py-8 border-gray-200 border rounded-md shadow">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 w-full">
          {/* location */}
          <div className="relative md:w-[435px] w-full h-[56px]">
            <label className="absolute left-10 -top-2 px-1 text-sm text-gray-500 bg-white z-20">
              Enter City or Location
            </label>
            <div className="flex items-center border border-gray-400 rounded-md h-full pl-10 pr-4 relative bg-white">
              <FaBed className="absolute left-3 text-gray-700" size={16} />
              <input
                type="text"
                placeholder="Dhaka, Bangladesh"
                className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* check-in */}
          <div className="h-[56px] md:w-[240px] w-full relative">
            <label className="absolute left-10 -top-[10px] px-1 text-sm text-gray-500 bg-white z-20">
              Check-in
            </label>
            <div className="flex items-center border border-gray-400 rounded-md h-full pl-4 pr-4 relative bg-white">
              <input
                type="date"
                className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* check-out */}
          <div className="h-[56px] md:w-[240px] w-full relative">
            <label className="absolute left-10 -top-[10px] px-1 text-sm text-gray-500 bg-white z-20">
              Check-out
            </label>
            <div className="flex items-center border border-gray-400 rounded-md h-full pl-4 pr-4 relative bg-white">
              <input
                type="date"
                className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* nights select */}
          <div className="relative md:w-[110px] w-full h-[56px]">
            <label className="absolute left-10 -top-[10px] px-1 text-sm text-gray-500 bg-white z-20">
              Nights
            </label>
            <div className="flex items-center justify-center border border-gray-400 rounded-full h-full px-4 bg-white">
              <input
                type="text"
                placeholder="2 Nights"
                className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-center"
              />
            </div>
          </div>

          {/* rooms select */}
          <div className="h-[56px] md:w-[240px] w-full relative">
            <label className="absolute left-10 -top-[10px] px-1 text-sm text-gray-500 bg-white z-20">
              Rooms
            </label>
            <div className="flex items-center border border-gray-400 rounded-md h-full pl-4 pr-4 relative bg-white">
              <select className="w-full bg-transparent text-gray-600 outline-none">
                <option value="select" className="text-gray-400">
                  Select Room
                </option>
                <option value="1-1">1 Room 1 Guest</option>
                <option value="1-2">1 Room 2 Guests</option>
                <option value="2-1">2 Rooms 1 Guest</option>
                <option value="2-2">2 Rooms 2 Guests</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;
