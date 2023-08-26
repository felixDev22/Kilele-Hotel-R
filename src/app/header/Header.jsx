
import Link from "next/link";


export const Header = () => {
  return (
    <header className="border-white border-b-2 w-full fixed top-0 left-0 px-6 py-6 lg:px-16 lg:py-6 z-50">
      <div className="flex items-center justify-between space-x-2 md:space-x-10">
        <div>
          <Link href="/">
            <h2 className="logo font-bold text-white text-4xl cursor-pointer">
              Kilele
            </h2>
          </Link>
        </div>

        <ul className="ml-auto hidden md:flex">
          <li className="space-x-11">
            <Link href="/about" aria-label="About" className="navLink">
              About
            </Link>
            <Link
              href="/reservation"
              aria-label="Reservation"
              className="navLink">
              Reservation
            </Link>
            <Link href="/gallery" aria-label="Gallery" className="navLink">
              Gallery
            </Link>
            <Link href="/review" aria-label="Review" className="navLink">
              Review
            </Link>
            <Link href="/contact" aria-label="Contact" className="navLink">
              Contact
            </Link>
          </li>
        </ul>
        <div className="border-white border-l-2">
          <button
            className="btn text-white hover:bg-[#81642d] "
            aria-label="Book Now">
            Book Now
          </button>
        </div>

        <i
          className="fa-solid fa-bars cursor-pointer text-4xl md:hidden text-[#81642d]"
          aria-label="Mobile Menu"></i>
      </div>
    </header>
  );
};