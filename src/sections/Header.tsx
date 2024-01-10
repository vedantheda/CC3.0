import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";
import { GradientText } from "../components/GradientText";

// Built with Vivid (https://vivid.lol) ⚡️

export const Header = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const [top, setTop] = useState(true);
  const [nextSection, setNextSection] = useState(false);
  const [reloaded, setReloaded] = useState(false);

  // Handle scrolling logic
  const handleScroll = () => {
    setTop(window.pageYOffset <= 10);
    setNextSection(window.pageYOffset > window.innerHeight);
  };
  useEventListener("scroll", handleScroll);

  // Clean up stale dark mode
  useEffectOnce(() => setReloaded(true));

  const Logo = () => (
    <Link href="/">
      <div className="items-center block gap-1 row">
        <Image
          src="/images/logo.png"
          alt="cc logo"
          height="60"
          width="60"
        />
        <div className="text-3xl font-bold">

        </div>
      </div>
    </Link>
  );

  const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <nav>
        <div className="flex items-center justify-between">
          <div className="block lg:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.707 4.293a1 1 0 0 0-1.414 0L12 10.586 5.707 4.293a1 1 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 0 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0 0-1.414z"
                  />

                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`${isOpen
              ? "flex flex-col items-center h-screen"
              : "hidden"
              } h-fit absolute top-16 md:top-20 lg:static lg:bg-gray-50/0 lg:dark:bg-gray-900/0 lg:shadow-none left-0 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg rounded-b flex flex-col items-center gap-6 w-full p-4 lg:flex lg:items-center lg:gap-8 lg:text-2xl lg:row`}
          >
            <li><a href="#about">About Us</a></li>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/cyber-safar">Cyber-Safar</a></li>
            <li><a href="http://taqneeqfest.com/cybercypher/register" target="_blank" rel="noreferrer">Register</a></li>
          </ul>
        </div>
      </nav >
    );
  };

  return (
    // Colors must be set explicitly since opacity and blur don't work together
    <header
      className={`fixed w-full z-30 transition duration-300 ${!top &&
        "bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg"
        }`}
    >
      {/* Header Content */}
      <div className="items-center justify-between h-16 px-5 py-2 mx-auto row md:h-20 max-w-7xl sm:px-6">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
