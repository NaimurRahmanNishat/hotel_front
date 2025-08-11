import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBed } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full md:h-[200px] h-[380px] relative">
      <div className="absolute inset-0 z-10 -top-24 bg-white w-full md:h-[200px] rounded-sm shadow">
        <div className="flex flex-col gap-4 py-5 pt-9 px-4">
          {/* top section input here */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* location */}
            <div className="relative md:w-[465px] w-full h-[56px]">
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
            {/* check in */}
            <div className="h-[56px] w-[240px] relative">
              <label className="absolute left-10 -top-[10px] px-1 text-sm text-gray-500 bg-white z-20">
                Check-in
              </label>
              <div className="flex items-center border border-gray-400 rounded-md h-full pl-4 pr-4 relative bg-white">
                <input
                  type="date"
                  placeholder="12/12/2025"
                  className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>
            {/* check out */}
            <div className="h-[56px] w-[240px] relative">
              <label className="absolute left-10 -top-[10px] px-1 text-sm text-gray-500 bg-white z-20">
                Check-out
              </label>
              <div className="flex items-center border border-gray-400 rounded-md h-full pl-4 pr-4 relative bg-white">
                <input
                  type="date"
                  placeholder="Dhaka, Bangladesh"
                  className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>
            {/* nights select */}
            <div className="h-[39px] w-[110px] flex items-center justify-center top-2 border border-gray-400 rounded-full pl-4 pr-4 relative bg-white">
                <input type="text" placeholder="2 Nights" className="w-full flex items-center justify-center bg-transparent outline-none text-gray-900 placeholder:text-gray-400"/>
            </div>
            {/* rooms select */}
            <div className="h-[56px] w-[240px] relative">
              <label className="absolute left-10 -top-[10px] px-1 text-sm text-gray-500 bg-white z-20">
                Rooms
              </label>
              <div className="flex items-center border border-gray-400 rounded-md h-full pl-4 pr-4 relative bg-white">
                <select className="w-full bg-transparent text-gray-600 outline-none placeholder:text-gray-400">
                    <option value="select" className="text-gray-400">Select Room</option>
                    <option value="select">1 Room 1 Guest</option>
                    <option value="select">1 Room 2 Guest</option>
                    <option value="select">2 Room 1 Guest</option>
                    <option value="select">2 Room 2 Guest</option>
                </select>
              </div>
            </div>
          </div>
          {/* bottom section search bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/search" className="w-full h-[48px] bg-[#1E91B6] text-white rounded-md flex items-center justify-center gap-1 cursor-pointer">
              <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 cursor-pointer"> <CiSearch />Search</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
