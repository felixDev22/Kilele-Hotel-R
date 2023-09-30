
import Image from 'next/image';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const Carousel = () => {
  const slides = [
    '/assets/zebra.jpg',
    '/assets/slide2.png',
    '/assets/slide3.png',
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
          <div key={index} className='flex justify-center mt-24 w-full h-full flex-direction-row relative'>
            <Image
              src={each}
              alt="gallery"
              width={1110}
              height={500}
              className='w-3/4 object-cover rounded-lg shadow-xl'
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Carousel;
