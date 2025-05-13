"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { name: "About us", href: "#about-us" },
  { name: "Services", href: "#services" },
  { name: "Uses Cases", href: "#uses-cases" },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white sticky inset-0  pt-7 lg:pt-14 pb-2 flex items-center justify-between z-50">
      {/* logo */}
      <Link href="/" className="flex items-center gap-2">
        {/* image */}
        <Image
          src="/assets/logo-icon.png"
          alt="logo-image"
          width={36}
          height={36}
        />
        {/* text */}
        <h1 className="font-bold text-3xl">Positivus</h1>
      </Link>

      {/* menu burger bars */}
      <div
        className="space-y-1 group cursor-pointer lg:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`w-8 h-1 bg-black rounded-lg transition-all duration-300 ${
            isMenuOpen ? "transform rotate-45 translate-y-2" : "group-hover:w-6"
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-black rounded-lg transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-black rounded-lg transition-all duration-300 ${
            isMenuOpen
              ? "transform -rotate-45 -translate-y-2"
              : "group-hover:w-6"
          }`}
        ></div>
      </div>
      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Nav pathname={pathname} />
      </div>
      {/* right side */}
      <div className="hidden lg:block">
        <Nav pathname={pathname} />
      </div>
    </header>
  );
};

const Nav = ({ pathname }: { pathname: string }) => {
  return (
    <nav className="flex items-center justify-center lg:justify-end flex-col lg:flex-row gap-10 h-full">
      {menuItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`text-lg font-medium text-gray-500 hover:text-gray-800 transition-all duration-300 ease-in-out ${
            pathname === item.href ? "text-gray-800" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
      <button className="px-9 py-2.5 border rounded-2xl hover:bg-black hover:text-white cursor-pointer duration-300 transition-all">
        Request a quote
      </button>
    </nav>
  );
};
