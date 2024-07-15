import Image from 'next/image';
import React from 'react';

export default function Contact() {
  return (
    <div className="relative">
      <Image
        src="/assets/room6.jpg"
        alt="image"
        objectFit="cover"
        layout="fill"
        className="bg-opacity-70"
      />
      <div className="w-[400px] p-4 bg-opacity-60 pr-8 bg-[#573c18] mt-[16%] ml-[5%] absolute backdrop-filter backdrop-blur-md rounded-md">
        <h4 className="text-white text-[30px]">Contact Details</h4>
        <p>Phone number</p>
        <p>Email</p>
      </div>
    </div>
  );
}
