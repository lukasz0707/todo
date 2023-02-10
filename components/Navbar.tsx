import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className="w-full bg-black select-none">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-baseline lg:flex lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            {/* LOGO */}
            <Link href="/" onClick={() => setNavbar(false)}>
              <h2 className="text-3xl text-cyan-600 font-bold s">TodoApp</h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="lg:hidden">
              <button className="p-2 text-gray-700 rounded-lg outline-none" onClick={() => setNavbar(!navbar)}>
                {navbar ? <AiOutlineClose size={35} /> : <RxHamburgerMenu size={35} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "p-12 lg:p-0 block" : "hidden"}`}>
            <ul className="h-screen lg:h-auto place-items-baseline justify-center lg:flex text-2xl">
              <Link href="/todos" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6  text-white py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover:bg-slate-900 border-cyan-800   lg:hover:text-cyan-500 lg:hover:bg-transparent">
                  Todos
                </li>
              </Link>
              <Link href="/friends" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6 text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-slate-900 border-cyan-800  lg:hover:text-cyan-500 lg:hover:bg-transparent">
                  Friends
                </li>
              </Link>
              <Link href="/settings" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6 text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-slate-900  border-cyan-800  lg:hover:text-cyan-500 lg:hover:bg-transparent">
                  Settings
                </li>
              </Link>
              <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6 text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-slate-900  border-cyan-800  lg:hidden">
                  Login
                </li>
              </Link>
              <Link href="login">
                <button className="bg-cyan-400  hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full hidden lg:inline-block">
                  Login
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
