import React, { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
import LoginBtn from "./LoginBtn"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className={`w-full select-none lg:bg-none ${navbar ? "fixed inset-0 bg-black" : "block"}`}>
      <div className="mx-auto justify-between px-4 lg:flex lg:max-w-7xl lg:items-baseline lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:block lg:py-5">
            {/* LOGO */}
            <Link to="/" onClick={() => setNavbar(false)}>
              <h2 className="text-4xl font-bold text-white ">TodoApp</h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="lg:hidden">
              <button className="rounded-lg p-2 text-white outline-none" onClick={() => setNavbar(!navbar)}>
                {navbar ? <AiOutlineClose size={35} /> : <RxHamburgerMenu size={35} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`mt-8 flex-1 justify-self-center pb-3 lg:mt-0 lg:block lg:pb-0 ${navbar ? "block p-12 lg:p-0" : "hidden"}`}>
            <ul className="h-screen place-items-baseline justify-center text-2xl lg:flex lg:h-auto">
              <Link to="/todos" onClick={() => setNavbar(!navbar)}>
                <li className="border-b-2  border-cyan-800 py-2 pb-6 text-center text-white hover:bg-slate-900  lg:border-b-0 lg:px-6   lg:hover:bg-transparent lg:hover:text-cyan-500">
                  Todos
                </li>
              </Link>
              <Link to="/friends" onClick={() => setNavbar(!navbar)}>
                <li className="border-b-2 border-cyan-800 py-2 px-6 pb-6  text-center text-white  hover:bg-slate-900 lg:border-b-0  lg:hover:bg-transparent lg:hover:text-cyan-500">
                  Friends
                </li>
              </Link>
              <Link to="/settings" onClick={() => setNavbar(!navbar)}>
                <li className="border-b-2 border-cyan-800 py-2 px-6 pb-6  text-center text-white  hover:bg-slate-900  lg:border-b-0  lg:hover:bg-transparent lg:hover:text-cyan-500">
                  Settings
                </li>
              </Link>
              <LoginBtn />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
