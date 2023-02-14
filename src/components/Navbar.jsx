import React, { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
import LoginBtn from "./LoginBtn"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className={`w-full lg:bg-none select-none ${navbar ? "fixed inset-0 bg-black" : "block"}`}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-baseline lg:flex lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            {/* LOGO */}
            <a href="/" onClick={() => setNavbar(false)}>
              <h2 className="text-4xl text-white font-bold ">TodoApp</h2>
            </a>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="lg:hidden">
              <button className="p-2 text-white rounded-lg outline-none" onClick={() => setNavbar(!navbar)}>
                {navbar ? <AiOutlineClose size={35} /> : <RxHamburgerMenu size={35} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "p-12 lg:p-0 block" : "hidden"}`}>
            <ul className="h-screen lg:h-auto place-items-baseline justify-center lg:flex text-2xl">
              <a href="/todos" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6  text-white py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover:bg-slate-900 border-cyan-800   lg:hover:text-cyan-500 lg:hover:bg-transparent">
                  Todos
                </li>
              </a>
              <a href="/friends" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6 text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-slate-900 border-cyan-800  lg:hover:text-cyan-500 lg:hover:bg-transparent">
                  Friends
                </li>
              </a>
              <a href="/settings" onClick={() => setNavbar(!navbar)}>
                <li className="pb-6 text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-slate-900  border-cyan-800  lg:hover:text-cyan-500 lg:hover:bg-transparent">
                  Settings
                </li>
              </a>
                <LoginBtn/>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}