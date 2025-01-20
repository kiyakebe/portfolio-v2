import Link from "next/link";
import Image from "next/image";
import { ScrollToTop } from "./scrollToTop";
import { navigationLinks } from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="lg:container mx-auto  px-4 sm:px-6 lg:px-8 md:py-24 md:lg:py-24 lg:max-w-[1440px] border-t-2">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <Link href="/" className="block">
            <Image
              src="/logoDark.png"
              alt="ThemeJunction Logo"
              width={48}
              height={48}
              className="hover:opacity-90 hidden dark:inline-block transition-opacity "
            />
            <Image
              src="/logoLight.png"
              alt="ThemeJunction Logo"
              width={48}
              height={48}
              className="hover:opacity-90 transition-opacity dark:hidden"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="text-gray-400 text-sm text-center">
            © {currentYear} All rights reserved by Kiya Kebe
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}
