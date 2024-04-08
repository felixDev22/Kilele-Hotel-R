
import Image from 'next/image';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const Carousel = () => {
  const slides = [
    '/assets/slide1.png',
    '/assets/slide2.png',
    '/assets/slide5.png',
    '/assets/slide4.png',
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    autoplay: true,

    prevArrow: (
      <div>
        <button className="absolute top-1/2 left-8 lg:left-48 hover:rounded-full">
          <FiArrowLeftCircle size={20} style={{ color: '#4dd3f5' }} />
        </button>
      </div>
    ),
    nextArrow: (
      <div>
        <button className="absolute top-1/2 right-8 lg:right-48 hover:rounded-full">
          <FiArrowRightCircle size={20} style={{ color: '#4dd3f5' }} />
        </button>
      </div>
    ),
  };

  return (
    <div className="bg-[#3a2d2d] h-screen">
      <Zoom {...zoomInProperties}>
        {slides.map((each, index) => (
          <div
            key={index}
            className="flex justify-center mt-24 w-full h-full flex-direction-row relative">
            <Image
              src={each}
              alt="gallery"
              width={1100}
              height={400}
              className="w-3/4 h-full object-contain rounded shadow-xl"
            />
          </div>
        ))}
      </Zoom>
      <div className="px-12 pt-8">
        <p className=" text-xl leading-5 font-script text-[#81642d]">
          Beyond its stunning vistas, Kilele Hotel takes pride in its commitment
          to the community. Embark on a journey of opulence and tranquility at
          Kilele Hotel, where luxury meets tradition.
        </p>
        <p className=" text-l leading-5 pt-8 text-[#fff]">
          Beyond its stunning vistas, Kilele Hotel takes pride in its commitment
          to the community. Embark on a journey of opulence and tranquility at
          Kilele Hotel, where luxury meets tradition.
        </p>
        <button
          type="submit"
          value="Book now"
          className="btn bg-[#81642d] text-white mt-8 md:text-base lg:text-lg">
          Book Your Maasai Experience
        </button>
      </div>
    </div>
  );
};

export default Carousel;
