import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {IoIosArrowRoundBack} from "react-icons/io"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()

    // build the request payload
    let payload = {
      username: username,
      password: password,
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/users/login`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          //   setAlertClassName("alert-danger")
          //   setAlertMessage(data.message)
          console.log(`error: ${data.error}`)
        } else {
          //   setJwtToken(data.access_token)
          //   setAlertClassName("d-none")
          //   setAlertMessage("")
          //   toggleRefresh(true)
          console.log(data.access_token)
          // SetAccessToken(data.access_token)
          // console.log(document.cookie)
          navigate("/")
        }
      })
      .catch((error) => {
        // setAlertClassName("alert-danger")
        // setAlertMessage(error)
        console.log(error)
      })
  }

  return(
    // <div className="static w-full bg-red-300 text-center z-10">
    //   <div>
    //     <h2>Login</h2>
    //     <hr />

    //     <form onSubmit={handleSubmit}>
    //       <input
    //         title="Username"
    //         type="username"
    //         className=""
    //         name="email"
    //         autoComplete="username-new"
    //         onChange={(event) => setUsername(event.target.value)}
    //       />

    //       <input
    //         title="Password"
    //         type="password"
    //         className=""
    //         name="password"
    //         autoComplete="password-new"
    //         onChange={(event) => setPassword(event.target.value)}
    //       />

    //       <hr />

    //       <input type="submit" className="" value="Login" />
    //     </form>
    //   </div>
    // </div>
    <div className="">
      <Link to={"/"}>
      <IoIosArrowRoundBack className="absolute ml-5 mt-5 text-white" size={60}/>
      </Link>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  required
                  onChange={(event) => setUsername(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <Link to={"#"} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Forgot password?
                </Link>
              </div>
              <input
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                value="Login"
              />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link to={"/signup"} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
