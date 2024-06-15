import Image from 'next/image';
import React from 'react';

const Rooms = () => {
  return (
    <div className="">
      <Image
        src="/assets/room5.jpg"
        alt="image"
        objectFit="cover"
        layout="fill"
        className="bg-opacity-70"
      />
      <div className="w-80vw p-4 bg-opacity-60 bg-[#573c18] mt-[20%] ml-[10%] absolute backdrop-filter backdrop-blur-md rounded-md">
        <div className="form grid">
          <form className="flex-col md:flex-row lg:flex-col flex">
            <input type="date" placeholder="Arrival Date" />
            <input type="date" placeholder="Departure Date" />
            <input type="number" placeholder="Adult" />
            <input type="number" placeholder="Children" />
            <input type="number" placeholder="Room" />
            <button
              type="submit"
              value="CHECK AVAILABILITY"
              className="btn mt-6 text-l bg-[#8d7352] text-white lg:ml-6 md:text-base lg:text-lg">
              CHECK AVAILABILITY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
