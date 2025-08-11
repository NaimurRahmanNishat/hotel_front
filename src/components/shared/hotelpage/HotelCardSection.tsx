import hotelImg from "../../../assets/hotel-hero.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar, FaHeart, FaCheck } from "react-icons/fa";

interface Hotel {
  name: string;
  image: string;
  location: string;
  rating: string;
  review: string;
  price: string;
  reviewScore: number;
  reviewRemark: string;
  amenities: string;
}

const hotelItems: Hotel[] = [
  {
    name: "Lemon Tree Premier Pune",
    image: hotelImg,
    location: "City Center, 15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001",
    rating: "5 Star Hotel",
    review: "371 reviews",
    price: "৳2349/night",
    reviewScore: 4.2,
    reviewRemark: "Very Good",
    amenities: "20+ Amenities",
  },
  {
    name: "Lemon Tree Premier Pune",
    image: hotelImg,
    location: "City Center, 15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001",
    rating: "5 Star Hotel",
    review: "371 reviews",
    price: "৳2349/night",
    reviewScore: 4.2,
    reviewRemark: "Very Good",
    amenities: "20+ Amenities",
  },
  {
    name: "Lemon Tree Premier Pune",
    image: hotelImg,
    location: "City Center, 15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001",
    rating: "5 Star Hotel",
    review: "371 reviews",
    price: "৳2349/night",
    reviewScore: 4.2,
    reviewRemark: "Very Good",
    amenities: "20+ Amenities",
  },
  {
    name: "Lemon Tree Premier Pune",
    image: hotelImg,
    location: "City Center, 15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001",
    rating: "5 Star Hotel",
    review: "371 reviews",
    price: "৳2349/night",
    reviewScore: 4.2,
    reviewRemark: "Very Good",
    amenities: "20+ Amenities",
  },
  {
    name: "Lemon Tree Premier Pune",
    image: hotelImg,
    location: "City Center, 15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001",
    rating: "5 Star Hotel",
    review: "371 reviews",
    price: "৳2349/night",
    reviewScore: 4.2,
    reviewRemark: "Very Good",
    amenities: "20+ Amenities",
  },
  {
    name: "Lemon Tree Premier Pune",
    image: hotelImg,
    location: "City Center, 15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001",
    rating: "5 Star Hotel",
    review: "371 reviews",
    price: "৳2349/night",
    reviewScore: 4.2,
    reviewRemark: "Very Good",
    amenities: "20+ Amenities",
  },
  {
    name: "Lemon Tree Premier Pune",
    image: hotelImg,
    location: "City Center, 15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra 411001",
    rating: "5 Star Hotel",
    review: "371 reviews",
    price: "৳2349/night",
    reviewScore: 4.2,
    reviewRemark: "Very Good",
    amenities: "20+ Amenities",
  },
];

const HotelCardSection = () => {
  return (
    <div className="py-8 px-4 space-y-6">
      {hotelItems.map((hotel, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
        >
          {/* Image with badge */}
          <div className="relative w-full md:w-[500px] h-auto">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-[#dce6ef] text-gray-700 px-3 py-1 text-xs rounded-full font-medium shadow">
              9 images
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-4 w-full">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {hotel.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                <FaLocationDot className="text-gray-500" /> {hotel.location}
              </p>

              {/* Rating and amenities */}
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-700">
                <span className="flex items-center gap-1 text-blue-600 font-medium">
                  <FaStar className="text-blue-500" /> {hotel.rating}
                </span>
                <span className="flex items-center gap-1 text-gray-600">
                  <FaCheck className="text-green-500" />
                  {hotel.amenities}
                </span>
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-2 mt-3">
                <span className="bg-gray-200 px-2 py-1 rounded text-sm font-semibold">
                  {hotel.reviewScore}
                </span>
                <span className="text-sm font-medium text-gray-800">
                  {hotel.reviewRemark}
                </span>
                <span className="text-sm text-gray-500">{hotel.review}</span>
              </div>
            </div>

            {/* Bottom section: Price + Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4 border-t pt-4">
              <div className="text-right w-full md:w-auto">
                <p className="text-lg font-bold text-blue-600">{hotel.price}</p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button className="p-2 border rounded-md hover:bg-gray-100">
                  <FaHeart className="text-gray-600" />
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full md:w-auto">
                  View Place
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCardSection;
