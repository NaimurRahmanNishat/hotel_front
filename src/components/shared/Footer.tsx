import { Facebook, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full md:h-[355px] py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div className="flex flex-col gap-4 w-full">
          <h2 className="font-bold text-[16px] text-gray-900">
            About <br /> Rareblocks
          </h2>
          <p className="text-gray-600 text-[13px] font-normal font-Montserrat">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
          <div className="flex gap-4 text-gray-700">
            <Twitter className="hover:text-blue-500 cursor-pointer" />
            <Facebook className="hover:text-blue-700 cursor-pointer" />
            <Instagram className="hover:text-pink-500 cursor-pointer" />
            <Github className="hover:text-gray-800 cursor-pointer" />
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[16px] text-gray-900">Company</h2>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li className="hover:scale-105 duration-200 cursor-pointer">About</li>
            <li className="hover:scale-105 duration-200 cursor-pointer">Features</li>
            <li className="hover:scale-105 duration-200 cursor-pointer">Works</li>
            <li className="hover:scale-105 duration-200 cursor-pointer">Career</li>
          </ul>
        </div>

        {/* Help Links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[16px] text-gray-900">Help</h2>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li className="hover:scale-105 duration-200 cursor-pointer">Customer Support</li>
            <li className="hover:scale-105 duration-200 cursor-pointer">Delivery Details</li>
            <li className="hover:scale-105 duration-200 cursor-pointer">Terms & Conditions</li>
            <li className="hover:scale-105 duration-200 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="flex flex-col gap-4 col-span-1 sm:col-span-2 md:col-span-1">
          <h2 className="font-bold text-[16px] text-gray-900">Resources</h2>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li className="hover:scale-105 duration-200 cursor-pointer">Free eBooks</li>
            <li className="hover:scale-105 duration-200 cursor-pointer">Development Tutorial</li>
            <li className="hover:scale-105 duration-200 cursor-pointer">How to - Blog</li>
            <li className="hover:scale-105 duration-200 cursor-pointer">YouTube Playlist</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Rareblocks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
