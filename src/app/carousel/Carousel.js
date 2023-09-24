
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

export default function Carousel({children: slides}) {
  return (
    <>
      <div className="flex overflow-hidden relative px-4">{slides}</div>
      <div>
        <button className="absolute top-1/2 left-8">
          <FiArrowLeftCircle size={30} />
        </button>
        <button className="absolute top-1/2 right-8">
          <FiArrowRightCircle size={30} />
        </button>
      </div>
    </>
  );
}
