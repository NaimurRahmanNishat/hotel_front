import dhaka from "../../../assets/ahosan-monjil.jpg";
import chattogram from "../../../assets/river-port.jpeg";
import coxsbazar from "../../../assets/sea-beach.jpeg";
import bandarban from "../../../assets/bandarban.jpeg";
import rangamati from "../../../assets/rangamati.jpeg";

const locations = [
  { name: "Dhaka", image: dhaka, places: 325 },
  { name: "Chattogram", image: chattogram, places: 425 },
  { name: "Cox's Bazar", image: coxsbazar, places: 410 },
  { name: "Bandarban", image: bandarban, places: 290 },
  { name: "Rangamati", image: rangamati, places: 215 },
];

const Mostlocation = () => {
  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold font-Montserrat text-gray-900 mb-6 text-center md:text-left">
          Most Searched Locations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {locations.map((loc, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={loc.image}
                alt={loc.name}
                width={80}
                height={80}
                className="rounded-md object-cover w-20 h-20"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 font-Montserrat">
                  {loc.name}
                </h4>
                <p className="text-sm text-gray-600 font-Montserrat">
                  {loc.places} places
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mostlocation;
