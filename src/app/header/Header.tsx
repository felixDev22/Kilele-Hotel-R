
export const Header = () => {
  return (
    <header className="bg-white w-full fixed top-0 left-0 px-6 py-6 transition-all lg:px-16 lg:py-6 z-10">
      <div className="flex items-center justify-between space-x-2 md:space-x-10">
        <div>
          <h2 className="logo font-bold text-[#070707] text-4xl">Kilele</h2>
        </div>
        <div className="ml-auto">
          <ul className="hidden md:flex space-x-8">
            <li className="navLink hover:text-[#4dd3f5] hover:font-bold">
              <a href="/about" aria-label="About">
                About
              </a>
            </li>
            <li className="navLink hover:text-[#4dd3f5] hover:font-bold">
              <a href="/reservation" aria-label="Reservation">
                Reservation
              </a>
            </li>
            <li className="navLink hover:text-[#4dd3f5] hover:font-bold">
              <a href="/gallery" aria-label="Gallery">
                Gallery
              </a>
            </li>
            <li className="navLink hover:text-[#4dd3f5] hover:font-bold">
              <a href="/review" aria-label="Review">
                Review
              </a>
            </li>
            <li className="navLink hover:text-[#4dd3f5] hover:font-bold">
              <a href="/contact" aria-label="Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn bg-[#81642d] text-white" aria-label="Book Now">
            Book Now
          </button>
        </div>

        <i
          className="fa-solid fa-bars cursor-pointer text-4xl md:hidden"
          aria-label="Mobile Menu"></i>
      </div>
    </header>
  );
};