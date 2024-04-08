
import Link from "next/link";



export const Header = () => {
  return (
    <header className="bg-white w-full fixed top-0 left-0 px-6 py-6 lg:px-16 lg:py-6 z-10">
      <div className="flex items-center justify-between space-x-2 md:space-x-10">
        <div>
          <h2 className="logo font-bold text-[#070707] text-4xl">Kilele</h2>
        </div>
        <div className="ml-auto">
          <ul className="hidden md:flex space-x-8">
            <li className="navLink hover:text-[#4dd3f5] hover:font-bold">
              <Link href="/about" aria-label="About">
                About
              </Link>
            </li>
            <li className="navLink hover:text-[#4dd3f5] hover:font-bold">
              <Link href="/reservation" aria-label="Reservation">
                Reservation
              </Link>
            </li>
            <li className="navLink hover:text-[#4dd3f5] hover:font-bold">
              <Link href="/gallery" aria-label="Gallery">
                Gallery
              </Link>
            </li>
            <li className="navLink hover:text-[#4dd3f5] hover:font-bold">
              <Link href="/review" aria-label="Review">
                Review
              </Link>
            </li>
            <li className="navLink hover:text-[#4dd3f5] hover:font-bold">
              <Link href="/contact" aria-label="Contact">
                Contact
              </Link>
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