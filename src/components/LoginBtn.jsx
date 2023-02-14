import React from "react"
import { Link } from "react-router-dom"

export default function LoginBtn(props) {
  return (
    <Link to={"/login"}>
      <button className="bg-cyan-400  hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full hidden lg:inline-block">
        {/* {props.accessToken ? "Logout" : "Login"} */}Login
      </button>
    </Link>
  )
}