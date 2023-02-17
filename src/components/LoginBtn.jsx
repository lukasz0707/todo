import React from "react"
import { Link } from "react-router-dom"

export default function LoginBtn(props) {
  return (
    <Link to={"/login"}>
      <li className="mx-auto mt-10 block rounded-full bg-cyan-400 py-2 px-6 text-center font-bold text-white hover:bg-cyan-600 lg:inline-block">
        {/* {props.accessToken ? "Logout" : "Login"} */}Login
      </li>
    </Link>
  )
}
