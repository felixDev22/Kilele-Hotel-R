import Image from 'next/image';
import Carousel from '../carousel/Carousel';

const slides = [
  '/assets/zebra.jpg',
  '/assets/zebra.jpg',
  '/assets/zebra.jpg',
  '/assets/zebra.jpg',
];

export default function Gallery() {
  return (
    <div className="bg-[#3a2d2d] h-screen">
      <Carousel autoSlide={true} />
      {slides.map((slide, index) => (
        <div key={index} className='lg:w-[80vw] lg:h-[80vh]'>
          <Image src={slide} layout="fill" objectFit="cover" alt="gallery" />
        </div>
      ))}
      <Carousel />
    </div>
  );
}
