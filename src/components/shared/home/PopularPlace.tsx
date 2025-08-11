import mondir from "../../../assets/mondir.jpg";
import blue from "../../../assets/blu.webp";
import resort from "../../../assets/bandor-resort.jpg";
import symon from "../../../assets/symon-resort.jpg";

interface PlaceProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const places: PlaceProps[] = [
  {
    id: 1,
    name: "Dhaka",
    description: "An amazing place",
    image: mondir,
  },
  {
    id: 2,
    name: "Chittagong",
    description: "Port city with hills",
    image: blue,
  },
  {
    id: 3,
    name: "Cox’s Bazar",
    description: "Longest sea beach",
    image: symon,
  },
  {
    id: 4,
    name: "Bandarban",
    description: "Hill paradise",
    image: resort,
  },
];

const PopularPlace = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16">
      <h1 className="font-semibold text-3xl md:text-5xl text-gray-900 font-Montserrat text-center md:text-left mb-10">
        Popular Places
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {places.map((place) => (
          <div key={place.id} className="relative group overflow-hidden rounded-lg shadow-md">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-[300px] object-cover transform group-hover:scale-105 duration-300"
              width={329}
              height={467}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="text-xl font-semibold">{place.name}</h3>
              <p className="text-sm">{place.description}</p>
              <button className="mt-3 cursor-pointer px-4 py-2 bg-[#1E91B6] text-white hover:text-black text-sm rounded hover:bg-gray-200 transition">
                Book a Hotel
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPlace;
