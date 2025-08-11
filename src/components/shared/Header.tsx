import Navitems from "./Navitems";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between bg-darkLight">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <h1 className="text-3xl font-bold text-white font-Oswald">Hotel</h1>
          <button className="px-4 py-2 cursor-pointer text-darkLight text-2xl bg-white font-Roboto rounded-md">
            hub
          </button>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <Navitems />
        </nav>

        {/* Mobile navigation */}
        <div className="md:hidden flex">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
