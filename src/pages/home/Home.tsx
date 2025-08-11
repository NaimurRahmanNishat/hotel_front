import Hero from "@/components/shared/home/Hero";
import Mostlocation from "@/components/shared/home/Mostlocation";
import PopularPlace from "@/components/shared/home/PopularPlace";
import SearchBar from "@/components/shared/home/SearchBar";
import Testimonials from "@/components/shared/home/Testimonials";

const Home = () => {
  return (
    <div className='w-full md:h-[2376px] h-full'>
      <Hero/>
      <div className='box-container'>
        <SearchBar/>
        <Mostlocation/>
        <PopularPlace/>
        <h2 className='uppercase text-[#1E91B6] text-[18px] font-semibold font-Montserra mb-6 text-center'>Testimonials</h2>
        <Testimonials/>
      </div>
    </div>
  )
}

export default Home;