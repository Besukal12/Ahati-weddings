import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-around items-center mt-4">
      <Link href="./" className="flex items-center gap-3">
        <Image alt="Ahati hero Image" src="./file.svg" width={25} height={25} />
        <h2 className="text-white text-2xl">Ahati</h2>
      </Link>
      <ul className="flex gap-9">
        <li>
          <Link href="./" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="./services" className="nav-link">
            Services
          </Link>
        </li>
        <li>
          <Link href="./gallery" className="nav-link">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="./vendors" className="nav-link">
            Vendors
          </Link>
        </li>
        <li>
          <Link href="./journal" className="nav-link">
            Journal
          </Link>
        </li>
        <li>
          <Link href="./about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
      <div>
        <Link href="./contact" className="btn bg-orange text-forest font-bold">
          Start Planning <ArrowRight size={18} className="btn-icon" />
        </Link>
      </div>
    </nav>
  );
}
