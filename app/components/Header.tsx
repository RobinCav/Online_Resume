import Image from 'next/image';
import Link from 'next/link';


function Header() {
  return (
    <nav className="top-0 flex justify-between bg-white items-center p-4 sticky">
      {/* Logo on the left */}
      <Link href="/">
        <Image
          src="/CVLK2.png" 
          alt="Logo"
          width={30} 
          height={30} 
          className="cursor-pointer rounded-3xl" 
        />
      </Link>

      {/* Navigation on the right */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 hover:text-gray-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-gray-800 hover:text-gray-600">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Header;

