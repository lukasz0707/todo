import React, { useEffect, useRef, useState, useContext } from "react"
import AuthContext from "../context/AuthProvider"
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"
import { FcCheckmark, FcCancel, FcInfo, FcHighPriority } from "react-icons/fc"

import axios from "../api/axios"

const USERNAME_REGEX = /^[\p{L}\p{N}]{5,31}$/u //match alphhanumunicode with range<5-30>
const PASSWORD_REGEX = /^.{8,}$/ //match anything except line break with len >= 8 (space included)

export default function Login() {
  const { setAuth } = useContext(AuthContext)

  const usernameRef = useRef()
  const errRef = useRef()

  const [username, setUsername] = useState("")
  const [validUsername, setValidUsername] = useState(false)
  const [usernameFocus, setUsernameFocus] = useState(false)

  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const [matchPassword, setMatchPassword] = useState("")
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  useEffect(() => {
    setValidUsername(USERNAME_REGEX.test(username))
  }, [username])

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password))
    setValidMatch(password === matchPassword)
  }, [password, matchPassword])

  useEffect(() => {
    setErrMsg("")
  }, [username, password, matchPassword])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const v1 = USERNAME_REGEX.test(username)
    const v2 = PASSWORD_REGEX.test(password)
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry")
      return
    }

    // build the request payload
    let payload = {
      username: username,
      password: password,
    }

    try {
      const response = await axios.post("/users/login", JSON.stringify(payload), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      console.log(JSON.stringify(response?.data))
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.access_token
      setAuth({ username, password, accessToken })
      setUsername("")
      setPassword("")
      setMatchPassword("")
      navigate(from, { replace: true })
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response")
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password")
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized")
      } else {
        setErrMsg("Login Failed")
      }
      errRef.current.focus()
    }
  }

  return (
    <div className="bg-gray-900">
      <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 lg:py-0 ">
        <Link to={"/"} className="z-10 mb-[-1px]">
          <IoIosArrowRoundBack
            size={80}
            style={{
              color: "rgb(59 130 246)",
              background: "rgb(31 41 55)",
              border: "1px solid rgb(55 65 81)",
              borderBottom: "0px",
              borderRadius: "100% 100% 0 0",
            }}
            className=""
          />
        </Link>
        <div className="w-full rounded-lg  border border-gray-700 bg-gray-800 shadow sm:max-w-lg md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <p
              ref={errRef}
              className={errMsg ? "flex items-center text-3xl font-bold capitalize text-red-500" : "hidden"}
              aria-live="assertive"
            >
              <FcHighPriority className="mr-1" />
              {errMsg}
            </p>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">Sign in to your account</h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="mb-2 flex items-end text-sm font-medium text-white">
                  Username:
                  <FcCheckmark size={25} className={validUsername ? "ml-1" : "hidden"} />
                  <FcCancel size={25} className={validUsername || !username ? "hidden" : "ml-1"} />
                </label>
                <input
                  type="text"
                  id="username"
                  ref={usernameRef}
                  autoComplete="off"
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                  required
                  aria-invalid={validUsername ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUsernameFocus(true)}
                  onBlur={() => setUsernameFocus(false)}
                  className="block w-full rounded-lg border  border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <p
                  id="uidnote"
                  className={
                    usernameFocus && username && !validUsername ? "mt-2 w-full rounded-xl bg-gray-900 p-2 text-sm text-gray-300" : "hidden"
                  }
                >
                  <FcInfo className="mr-1 inline-block" />
                  5 to 30 characters.
                  <br />
                  Alphanumeric unicode.
                </p>
              </div>
              <div>
                <label htmlFor="password" className="mb-2 flex items-end text-sm font-medium text-white">
                  Password:
                  <FcCheckmark size={25} className={validPassword ? "ml-1" : "hidden"} />
                  <FcCancel size={25} className={validPassword || !password ? "hidden" : "ml-1"} />
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  className="block w-full rounded-lg border  border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <p
                  id="pwdnote"
                  className={passwordFocus && !validPassword ? "mt-2 w-full rounded-xl bg-gray-900 p-2 text-sm text-gray-300" : "hidden"}
                >
                  <FcInfo className="mr-1 inline-block" />
                  Minimum 8 characters.
                </p>
              </div>
              <div>
                <label htmlFor="confirm_pwd" className="mb-2 flex items-end text-sm font-medium text-white">
                  Confirm Password:
                  <FcCheckmark size={25} className={validMatch && matchPassword ? "ml-1" : "hidden"} />
                  <FcCancel size={25} className={validMatch || !matchPassword ? "hidden" : "ml-1"} />
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPassword(e.target.value)}
                  value={matchPassword}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="block w-full rounded-lg border  border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <p
                  id="confirmnote"
                  className={matchFocus && !validMatch ? "mt-2 w-full rounded-xl bg-gray-900 p-2 text-sm text-gray-300" : "hidden"}
                >
                  <FcInfo className="mr-1 inline-block" />
                  Must match the first password input field.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Link to={"/"} className="text-sm font-medium  text-blue-500 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <button
                disabled={!validUsername || !validPassword || !validMatch}
                // type={!validUsername || !validMatch ? "disabled" : "submit"}
                type="submit"
                className={
                  "w-full cursor-pointer rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-25   hover:disabled:bg-blue-600"
                }
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-400">
                Don???t have an account yet?{" "}
                <Link to={"/signup"} className="font-medium  text-blue-500 hover:underline">
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
