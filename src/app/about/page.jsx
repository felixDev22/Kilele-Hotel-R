
import Image from "next/image";


export default function About() {
  return (
    <div className="flex flex-row overflow-hidden ">
      <div className=" h-[100vh] w-[100vh] lg:bg-[#3a2d2d] lg:w-1/2 lg:h-screen lg:mt-0 lg:relative lg:z-10 p-4 md:z-50 md:mt-52 md:justify-center  md:bg-transparent flex items-center justify-center flex-col text-white">
        <div className="flex justify-center items-center ">
          <div className="bg-[#3a2d2d] p-10 z-50 md:absolute lg:bg-transparent">
            <div className="w-[55vw] md:[65vw] lg:px-44">
              <h3 className=" font-script lg:text-5xl md:text-6xl text-[#81642d] text-3xl">
                Experience
              </h3>
              <h1 className=" text-xl lg:text-4xl md:text-4xl font-bold">
                Ultimate Luxury<br></br> and Cultural Fusion at
              </h1>
              <h3 className=" lg:text-l md:text-xl tracking-wide capitalize mt-1 ">
                Kilele Hotel in Amboseli
              </h3>

              <p className=" text-sm leading-6 mt-8 lg:text-base md:text-l tracking-wide lg:leading-20 md:leading-5">
                Introducing Kilele Hotel, a hidden gem nestled in the heart of
                Amboseli, where breathtaking savannah panoramas and thriving
                wildlife surround you. Indulge in the epitome of executive
                hospitality at our establishment, boasting 20 expansive villas
                that seamlessly blend Maasai culture and architecture with
                modern sophistication.
              </p>
              <p className=" text-xl leading-5 mt-8 lg:text-2xl md:text-xl  lg:leading-6 font-script text-[#81642d]">
                Beyond its stunning vistas, Kilele Hotel takes pride in its
                commitment to the community. Embark on a journey of opulence and
                tranquility at Kilele Hotel, where luxury meets tradition.
              </p>
              <button
                type="submit"
                value="Book-Experience"
                className="btn bg-[#81642d] text-white mt-8 md:text-base lg:text-lg">
                Book Your Maasai Experience
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[68vw] h-screen md:h-screen  lg:relative">
        <Image src="/assets/slide3.png" objectFit="cover" layout="fill" alt="elephant"/>
      </div>
    </div>
  );
}
