import React from "react"

export default function Footer() {
  return (
    <footer className="w-full  p-4 shadow sm:flex sm:items-center sm:justify-between sm:px-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">© 2023 Łukasz Syczewski . All Rights Reserved.</span>
      <ul className="mt-1 flex select-none flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className=" p-2  hover:underline sm:p-4">
            About
          </a>
        </li>
        <li>
          <a href="#" className="p-2 hover:underline sm:p-4">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}
