import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Team", href: "/team" },
  { name: "Integration", href: "/integration" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Check if the nav item is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`${
        scrolled
          ? "fixed top-0 left-0 w-full bg-white/95 shadow-md animate-slideDown backdrop-blur-sm"
          : "absolute top-0 left-0 w-full bg-transparent"
      } z-[99] transition-all duration-300`}
    >
      <div className="container">
        <div className="grid grid-cols-9 xl:grid-cols-4 gap-1 xl:gap-5 relative h-[90px] items-center">
          <div className="col-span-3 md:col-span-4 xl:col-span-1 flex items-center">
            <Link to="/" className="inline-flex items-center">
              <img src="https://hilios.ai/assets/imgs/logo/logo-h.svg" alt="Hilios AI" className="w-10 h-10" />
            </Link>
          </div>

          <div className="col-span-2 hidden xl:flex justify-center">
            <nav
              aria-label="Main"
              className="relative z-10 flex max-w-max flex-1 items-center justify-center"
            >
              <div className="relative">
                <ul className="group flex flex-1 list-none items-center justify-center space-x-1 flex-wrap">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`flex items-center font-medium text-[16px] leading-none px-[15px] py-[37px] capitalize ${
                          isActive(item.href)
                            ? "text-theme"
                            : "text-primary hover:text-theme"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="col-span-6 md:col-span-5 xl:col-span-1 flex justify-end gap-[10px]">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 group lg:px-[25px] lg:py-[14px] text-[16px] font-bold leading-none text-white hover:text-white capitalize transition-all duration-300 bg-blue-500 hover:bg-blue-600 rounded-[15px] overflow-hidden z-[1] gap-[30px] h-10 md:h-[46px] px-4 py-2"
            >
              <span data-text="Contact Sales">Contact Sales</span>
            </Link>

            <div className="flex justify-end xl:hidden">
              <button
                aria-label="Open navigation menu"
                type="button"
                className=""
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black/30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hilios AI</span>
              <svg width="44" height="34" viewBox="0 0 65 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.92953 20.7163H0V47.9996H9.92953V20.7163Z" fill="#0078FF" />
                <path d="M9.92953 0H0V10.3582H9.92953V0Z" fill="#0078FF" />
                <path d="M30.2533 20.7163H20.3237V47.9996H30.2533V20.7163Z" fill="#0078FF" />
                <path d="M30.2533 0H20.3237V10.3582H30.2533V0Z" fill="#0078FF" />
                <path d="M57.8059 8.85553C60.7422 8.85553 63.1579 6.88189 63.1579 4.42776C63.1579 1.97364 60.7422 0 57.8059 0C54.8695 0 52.4538 1.97364 52.4538 4.42776C52.4538 6.88189 54.8695 8.85553 57.8059 8.85553Z" fill="#0078FF" />
                <path d="M57.7939 24.2329C60.7302 24.2329 63.146 22.2593 63.146 19.8052C63.146 17.351 60.7302 15.3774 57.7939 15.3774C54.8576 15.3774 52.4418 17.351 52.4418 19.8052C52.4418 22.2593 54.8576 24.2329 57.7939 24.2329Z" fill="#0078FF" />
                <path d="M57.6579 39.6104C60.5942 39.6104 63.01 37.6367 63.01 35.1826C63.01 32.7285 60.5942 30.7549 57.6579 30.7549C54.7216 30.7549 52.3059 32.7285 52.3059 35.1826C52.3059 37.6367 54.7216 39.6104 57.6579 39.6104Z" fill="#0078FF" />
              </svg>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      isActive(item.href)
                        ? "bg-gray-50 text-theme"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 group text-[16px] font-bold leading-none text-white capitalize transition-all duration-300 bg-blue-500 hover:bg-blue-600 rounded-[15px] overflow-hidden z-[1] w-full px-4 py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span data-text="Contact Sales">Contact Sales</span>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
