
import Image from "next/image";


export default function About() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 h-screen p-4 bg-[#3a2d2d] flex items-center justify-center flex-col text-white">
        <div className="w-[65vh]">
          <h3 className=" font-script text-7xl text-[#81642d]">Experience</h3>
          <h1 className=" text-7xl ">Ultimate Luxury and Cultural Fusion at</h1>
          <h3 className=" text-4xl tracking-wide capitalize mt-2 ">
            Kilele Hotel in Amboseli
          </h3>
          <p className="mt-8 text-2xl tracking-wide leading-10">
            Introducing Kilele Hotel, a hidden gem nestled in the heart of
            Amboseli, where breathtaking savannah panoramas and thriving
            wildlife surround you. Indulge in the epitome of executive
            hospitality at our establishment, boasting 20 expansive villas that
            seamlessly blend Maasai culture and architecture with modern
            sophistication.
          </p>
          <p className="mt-8 text-4xl tracking-wide leading-10 font-script text-[#81642d]">
            Beyond its stunning vistas, Kilele Hotel takes pride in its
            commitment to the community. We actively support local schools and
            empower Maasai women groups, fostering a deep connection with the
            land and its people. Embark on a journey of opulence and tranquility
            at Kilele Hotel, where luxury meets tradition.
          </p>
          <button
            type="submit"
            value="CHECK AVAILABILITY"
            className="btn bg-[#81642d] text-white mt-8 md:text-base lg:text-lg">
            Book Your Maasai Experience
          </button>
        </div>
      </div>
      <div className="w-1/2 h-screen relative">
        <Image src="/assets/zebra.jpg" objectFit="cover" layout="fill" />
      </div>
    </div>
  );
}
