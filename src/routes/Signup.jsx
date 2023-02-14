import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {IoIosArrowRoundBack} from "react-icons/io"

export default function Signup() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()

    // build the request payload
    let payload = {
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
      email: email
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    }

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`, requestOptions)
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
    <div className="bg-gray-50 dark:bg-gray-900 ">
      <Link to={"/"}>
      <IoIosArrowRoundBack className="absolute text-white mt-5 ml-5" size={60} />
      </Link>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Account
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
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                  onChange={(event) => setFirstName(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  required
                  onChange={(event) => setLastName(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                {/* <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-blue-300 rounded bg-blue-50 focus:ring-3 focus:ring-blue-300 dark:bg-blue-700 dark:border-blue-600 dark:focus:ring-blue-600 dark:ring-offset-blue-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div> */}
                <Link to={"#"} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Forgot password?
                </Link>
              </div>
              <input
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                value="Create Account"
              />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link to={"/Login"} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
