
import Link from "next/link";


export const Header = () => {
  return (
    <header className="border-white  border-b w-full fixed top-0 left-0 px-6 py-2 lg:px-16 lg:py-2 z-50">
      <div className="flex items-center justify-between space-x-2 md:space-x-10">
        <div>
          <Link href="/">
            <h2 className="logo font-bold text-white text-xl md:text-4xl cursor-pointer">
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
        <div className="border-white border-l">
          <button
            className="btn text-white hover:bg-[#81642d] "
            aria-label="Book Now">
            Book Now
          </button>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white lg:hidden md:hidden">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </header>
  );
};