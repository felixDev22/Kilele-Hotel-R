
import Image from "next/image";


export default function About() {
  return (
    <div className="flex flex-row ">
      <div className=" lg:w-1/2 lg:h-screen lg:mt-0 lg:relative lg:z-10 p-4 md:h-[70vh] md:w-[50vh] md:z-50 md:mt-52 md:justify-center bg-[#3a2d2d] flex items-center justify-center flex-col text-white">
        <div className="bg-[#3a2d2d] p-10 z-50">
          <div className=" w-[60vw]  lg:w-auto ">
            <h3 className=" font-script lg:text-1xl md:text-4xl text-[#81642d]">
              Experience
            </h3>
            <h1 className=" lg:text-2xl md:text-2xl font-bold">
              Ultimate Luxury and Cultural Fusion at
            </h1>
            <h3 className=" lg:text-lg md:text-2xl tracking-wide capitalize mt-1 ">
              Kilele Hotel in Amboseli
            </h3>

            <p className="mt-8 lg:text-base md:text-base sm:leading-5 tracking-wide leading-10">
              Introducing Kilele Hotel, a hidden gem nestled in the heart of
              Amboseli, where breathtaking savannah panoramas and thriving
              wildlife surround you. Indulge in the epitome of executive
              hospitality at our establishment, boasting 20 expansive villas
              that seamlessly blend Maasai culture and architecture with modern
              sophistication.
            </p>
            <p className="mt-8 lg:text-lg md:text-base tracking-wide leading-10 font-script text-[#81642d]">
              Beyond its stunning vistas, Kilele Hotel takes pride in its
              commitment to the community. Embark on a journey of opulence and
              tranquility at Kilele Hotel, where luxury meets tradition.
            </p>
            <button
              type="submit"
              value="CHECK AVAILABILITY"
              className="btn bg-[#81642d] text-white mt-8 md:text-base lg:text-lg">
              Book Your Maasai Experience
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 h-screen  md:w-full md:absolute  lg:relative">
        <Image src="/assets/zebra.jpg" objectFit="cover" layout="fill" />
      </div>
    </div>
  );
}
