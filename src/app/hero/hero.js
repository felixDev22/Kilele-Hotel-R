import Image from 'next/image';
import { Booking } from '../booking/Booking';

export const Hero = () => {
  return (
    <>
      <section className="w-full h-[90vh]">
        <Image
          src="/assets/image3.png"
          alt="image"
          objectFit="cover"
          layout="fill"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
        <div className="mt-20 absolute text-center inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-8xl lg:text-8xl text-white font-bold ">
            Hallo! Jambo!
          </h1>
          <p className="text-base md:text-xl md:mx-24 max-w-6xl px-6 py-2 text-[#fff] ">
            Escape to Kilele Hotel, Where Maasai Traditions and Modern Luxury
            Converge.
            <br />
            Your Serene Safari Awaits
          </p>
          <span className="font-script text-l lg:text-3xl text-[#4dd3f5]">
            Explore
          </span>
          <Booking />
        </div>
      </section>
    </>
  );
};
