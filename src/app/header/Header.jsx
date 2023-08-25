
import Link from "next/link";


export const Header = () => {
  return (
    <header className="bg-white w-full fixed top-0 left-0 px-6 py-6 lg:px-16 lg:py-6 z-10">
      <div className="flex items-center justify-between space-x-2 md:space-x-10">
        <div>
          <h2 className="logo font-bold text-[#070707] text-4xl cursor-pointer">
            Kilele
          </h2>
          <Link href="/"></Link>
        </div>

        <ul className="ml-auto hidden md:flex ">
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

        <button className="btn bg-[#81642d] text-white" aria-label="Book Now">
          Book Now
        </button>

        <i
          className="fa-solid fa-bars cursor-pointer text-4xl md:hidden"
          aria-label="Mobile Menu"></i>
      </div>
    </header>
  );
};