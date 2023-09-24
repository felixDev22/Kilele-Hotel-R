export default function Carousel({children: slides}) {
  return (
    <div className="flex overflow-hidden relative">
      {slides}
    </div>
    <div>
      <button>
        <ChevronLeft />
      </button>
    </div>
  );
}
