"use client";

import Image from "next/image";
import { useState } from "react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full py-6 pb-8">
      <div className="relative inline-block">
        <button
          type="button"
          className="px-3 py-1 mt-2 text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          <Image
            src="/data/family/mother.png"
            alt="User"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-46 rounded-lg shadow-lg bg-white ring-1 ring-blue-300 ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-blue-500 font-bold hover:bg-blue-300 gap-2"
                  onClick={closeDropdown}
                >
                  <Image
                    src="/data/family/child-01.png"
                    alt="User"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  María
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-blue-500 font-bold hover:bg-blue-300 gap-2"
                  onClick={closeDropdown}
                >
                  <Image
                    src="/data/family/child-02.png"
                    alt="User"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  Pedro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-blue-500 font-bold hover:bg-blue-300 gap-2"
                  onClick={closeDropdown}
                >
                  <Image
                    src="/data/family/abuelo.png"
                    alt="User"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  Raul (Abuelo)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-blue-500 font-bold hover:bg-blue-300 gap-2"
                  onClick={closeDropdown}
                >
                  <Image
                    src="/data/family/father.png"
                    alt="User"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  Pedro (Padre)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-blue-500 font-bold hover:bg-blue-300 gap-2"
                  onClick={closeDropdown}
                >
                  <Image
                    src="/data/family/mother.png"
                    alt="User"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  María (Madre)
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
