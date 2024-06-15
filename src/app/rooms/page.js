import Image from 'next/image';
import React from 'react'

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
    </div>
  );
}

export default Rooms