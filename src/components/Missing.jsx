import React from "react"
import { Link } from "react-router-dom"

export default function Missing() {
  return (
    <div className="flex h-screen items-center justify-center text-white">
      <div className="text-center text-2xl">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="mt-10">Page not found.</p>
        <p className="mt-10 border-b-2 border-transparent py-2 px-2  pb-1 text-cyan-400 hover:border-cyan-400">
          <Link to="/">Visit our Homepage</Link>
        </p>
      </div>
    </div>
  )
}
