import { TextAnimate } from "@/components/ui/TextAnimate";
import heroBg from "@/assets/herobg.webp";

const Hero = () => {
  return (
    <div className="relative w-full h-[735px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-transparent font-semibold text-[62px] text-center font-Montserrat bg-gradient-to-r from-pink-500 via-violet-500 to-yellow-500 bg-clip-text">
          <TextAnimate animate="fade" by="word">
            Hotel for moments rich
          </TextAnimate>
          <TextAnimate animate="fade" by="word">
            in emotions
          </TextAnimate>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
