import Link from "next/link";
import { NAVBAR_LINKS } from "@/app/constants/constants";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-800 p-4 w-full">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="../../icon.png" alt="icon" className="w-10 h-10 mr-3" />
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {NAVBAR_LINKS.map(
            (link: { href: string; label: string }, index: number) => (
              <Link
                href={link.href}
                key={index}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
