import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

function Footer() {
  return (
    <div>
      <footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022 Polygon technology
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BsLinkedin />
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SiDiscord />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
