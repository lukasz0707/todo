import React, { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"
import { FcCheckmark, FcCancel, FcInfo, FcHighPriority } from "react-icons/fc"

import axios from "../api/axios"

const USERNAME_REGEX = /^[\p{L}\p{N}]{5,31}$/u //match alphhanumunicode with range<5-30>
const PASSWORD_REGEX = /^.{8,}$/ //match anything except line break with len >= 8 (space included)
const NAME_REGEX = /^[\p{L}\p{N}]{5,76}$/u //match alphhanumunicode with range<5-75>
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ //email regex

export default function Signup() {
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

  const [firstName, setFirstName] = useState("")
  const [validFirstName, setValidFirstName] = useState(false)
  const [firstNameFocus, setFirstNameFocus] = useState(false)

  const [lastName, setLastName] = useState("")
  const [validLastName, setValidLastName] = useState(false)
  const [lastNameFocus, setLastNameFocus] = useState(false)

  const [email, setEmail] = useState("")
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

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
    setValidFirstName(NAME_REGEX.test(firstName))
  }, [firstName])

  useEffect(() => {
    setValidLastName(NAME_REGEX.test(lastName))
  }, [lastName])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setErrMsg("")
  }, [username, password, matchPassword, firstName, lastName, email])

  // const handleSubmit = (event) => {
  //   event.preventDefault()

  //   const v1 = USERNAME_REGEX.test(username)
  //   const v2 = PASSWORD_REGEX.test(password)
  //   const v3 = NAME_REGEX.test(firstName)
  //   const v4 = NAME_REGEX.test(lastName)
  //   const v5 = EMAIL_REGEX.test(email)

  //   if (!v1 || !v2 || !v3 || !v4 || !v5) {
  //     setErrMsg("Invalid Entry")
  //     return
  //   }

  //   // build the request payload
  //   let payload = {
  //     username: username,
  //     password: password,
  //     first_name: firstName,
  //     last_name: lastName,
  //     email: email,
  //   }

  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //     body: JSON.stringify(payload),
  //   }

  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/users/`, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.error) {
  //         console.log(data.error)
  //         setErrMsg(data.error)
  //         errRef.current.focus()
  //       } else {
  //         //clear state and controlled inputs
  //         //need value attrib on inputs for this
  //         setUsername("")
  //         setPassword("")
  //         setMatchPassword("")
  //         setFirstName("")
  //         setLastName("")
  //         setEmail("")
  //         console.log(data.access_token)
  //         navigate("/")
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       errRef.current.focus()
  //     })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const v1 = USERNAME_REGEX.test(username)
    const v2 = PASSWORD_REGEX.test(password)
    const v3 = NAME_REGEX.test(firstName)
    const v4 = NAME_REGEX.test(lastName)
    const v5 = EMAIL_REGEX.test(email)

    if (!v1 || !v2 || !v3 || !v4 || !v5) {
      setErrMsg("Invalid Entry")
      return
    }

    // build the request payload
    let payload = {
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
      email: email,
    }

    try {
      const response = await axios.post("/users", JSON.stringify(payload), {
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
      setFirstName("")
      setLastName("")
      setEmail("")
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
      <div className="mx-auto mt-5 mb-5 flex h-auto flex-col items-center justify-center px-6 py-8 lg:py-0">
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
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">Register account</h1>
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
              <div>
                <label htmlFor="firstName" className="mb-2 flex items-end text-sm font-medium text-white">
                  First Name:
                  <FcCheckmark size={25} className={validFirstName ? "ml-1" : "hidden"} />
                  <FcCancel size={25} className={validFirstName || !firstName ? "hidden" : "ml-1"} />
                </label>
                <input
                  type="text"
                  id="firstName"
                  autoComplete="off"
                  onChange={(event) => setFirstName(event.target.value)}
                  value={firstName}
                  required
                  aria-invalid={validFirstName ? "false" : "true"}
                  aria-describedby="fnIdNote"
                  onFocus={() => setFirstNameFocus(true)}
                  onBlur={() => setFirstNameFocus(false)}
                  className="block w-full rounded-lg border  border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <p
                  id="fnIdNote"
                  className={
                    firstNameFocus && firstName && !validFirstName
                      ? "mt-2 w-full rounded-xl bg-gray-900 p-2 text-sm text-gray-300"
                      : "hidden"
                  }
                >
                  <FcInfo className="mr-1 inline-block" />
                  5 to 75 characters.
                  <br />
                  Alphanumeric unicode.
                </p>
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 flex items-end text-sm font-medium text-white">
                  Last Name:
                  <FcCheckmark size={25} className={validLastName ? "ml-1" : "hidden"} />
                  <FcCancel size={25} className={validLastName || !lastName ? "hidden" : "ml-1"} />
                </label>
                <input
                  type="text"
                  id="lastName"
                  autoComplete="off"
                  onChange={(event) => setLastName(event.target.value)}
                  value={lastName}
                  required
                  aria-invalid={validLastName ? "false" : "true"}
                  aria-describedby="lnIdNote"
                  onFocus={() => setLastNameFocus(true)}
                  onBlur={() => setLastNameFocus(false)}
                  className="block w-full rounded-lg border  border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <p
                  id="lnIdNote"
                  className={
                    lastNameFocus && lastName && !validLastName ? "mt-2 w-full rounded-xl bg-gray-900 p-2 text-sm text-gray-300" : "hidden"
                  }
                >
                  <FcInfo className="mr-1 inline-block" />
                  5 to 75 characters.
                  <br />
                  Alphanumeric unicode.
                </p>
              </div>
              <div>
                <label htmlFor="email" className="mb-2 flex items-end text-sm font-medium text-white">
                  Email:
                  <FcCheckmark size={25} className={validEmail ? "ml-1" : "hidden"} />
                  <FcCancel size={25} className={validEmail || !email ? "hidden" : "ml-1"} />
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="emailIdNote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className="block w-full rounded-lg border  border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <p
                  id="emailIdNote"
                  className={emailFocus && email && !validEmail ? "mt-2 w-full rounded-xl bg-gray-900 p-2 text-sm text-gray-300" : "hidden"}
                >
                  <FcInfo className="mr-1 inline-block" />
                  Please enter a valid email address
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Link to={"/"} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Forgot password?
                </Link>
              </div>
              <button
                disabled={!validUsername || !setValidPassword || !validMatch || !validFirstName || !validLastName || !validEmail}
                // type={!validUsername || !validMatch ? "disabled" : "submit"}
                type="submit"
                className={
                  "w-full cursor-pointer rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-25   hover:disabled:bg-blue-600"
                }
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-400">
                Already have an account?{" "}
                <Link to={"/Login"} className="font-medium  text-blue-500 hover:underline">
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
