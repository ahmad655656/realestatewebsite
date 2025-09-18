import React from "react";

const Footer = () => {
  return (
    <nav aria-label="Global" className="md:block h-[10vh] mx-auto ">
      <ul className="flex items-center justify-center md:gap-6 gap-9 transition-all duration-300 ease-in-out p-5 text-sm">
        <li>
          <a
            className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Service
          </a>
        </li>

        <li>
          <a
            className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            About
          </a>
        </li>

        <li>
          <a
            className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            FAQ
          </a>
        </li>

        <li>
          <a
            className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Contacts
          </a>
        </li>

        <li>
          <a
            className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            Consulation
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
