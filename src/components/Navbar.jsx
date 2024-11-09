import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top + + window.scrollY;
      const offsetPosition = elementPosition +  offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };
  return (
    <>
      <div>
        <nav className="fixed left-0 right-0 top-4 z-50">
          {/* Desktop Menu */}
          <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
            <div className="flex items-center justify-between gap-6">
              {/* <div>
                <a href="#">
                  <p>Urvish Prajapati</p>
                </a>
              </div> */}
              <div>
                <ul className="flex items-center gap-4">
                  {NAVIGATION_LINKS.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-lg hover:text-yellow-400"
                        onClick={(e) => handleLinkClick(e, item.href)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="rounded-lg backdrop-blur-md lg:hidden">
            <div className="flex items-center justify-between">
              {/* <div> */}
                {/* <a href="#">
                  <p>Urvish Prajapati</p>
                </a> */}
              {/* </div> */}
              <div className="flex items-center">
                <button
                  className="focus:outline-none lg:hidden"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <FaTimes className="m-2 h-6 w-5" />
                  ) : (
                    <FaBars className="m-2 h-6 w-5" />
                  )}
                </button>
              </div>
            </div>
            {isMenuOpen && (
              <ul className="ml-4 flex flex-col gap-4 backdrop-blur-md p-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block w-full text-lg"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
