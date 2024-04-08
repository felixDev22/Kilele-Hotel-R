import Image from 'next/image';
import { Booking } from '../booking/Booking';

export const Hero = () => {
  return (
    <>
      <section className="w-full h-90vh bg-black ">
        <Image
          src="/assets/image3.png"
          alt="image"
          objectFit="cover"
          layout="fill"
          className="bg-opacity-70"
        />
        <div className='absolute inset-0 bg-gray-900 bg-opacity-40'></div>
        <div className="absolute text-center inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-8xl lg:text-8xl text-white font-bold ">
            Hallo! Jambo!
          </h1>
          <p className="text-lg md:text-xl md:mx-24 max-w-6xl px-12 py-4 text-[#fff] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <Booking />
        </div>
      </section>
    </>
  );
};
