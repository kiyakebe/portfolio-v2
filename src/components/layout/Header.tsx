"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navigationLinks } from "@/constants";
import { ThemeToggle } from "./ThemeToggler";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      id="Home"
      className={`sticky-header ${
        !isVisible ? "sticky-header--hidden" : ""
      } py-3`}
    >
      <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-[1440px]">
        <div className="flex justify-between items-center py-4 p-6 md:space-x-10 md:px-5">
          <div className="flex justify-start">
            <a
              href="/"
              className="md:text-xl lg:text-2xl font-semibold text-slate-800 dark:text-slate-100 items-center flex z-40"
            >
              {/* <img
                src="/logo src"
                alt="Logo"
                className="me-4 w-10 lg:w-50"
              /> */}
              Kiya Kebe
            </a>
          </div>

          <div className="-mr-2 -my-2 md:hidden z-40">
            <Button variant="ghost" onClick={toggleMobileMenu}>
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="h-8 w-8" aria-hidden="true" />
              )}
            </Button>
          </div>

          <nav className="hidden md:flex space-x-5 lg:space-x-10">
            {navigationLinks.map((link, index) => (
              <Link key={index} href={link.href} className="cursor-pointer">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4">
            <Link
              href="#contact"
              className="hidden md:flex items-center transition-all duration-300"
            >
              <Button className="w-full group bg-gradient-to-r from-[#834EF0] to-[#4d279a] text-white py-4 rounded-md">
                Hire Me
                <ArrowRight className="h-6 w-6 me-4 ms-1 group-hover:ms-4 group-hover:me-1 transition-all duration-300" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden p-6">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Link href="#contact">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
