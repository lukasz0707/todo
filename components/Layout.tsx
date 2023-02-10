import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}
