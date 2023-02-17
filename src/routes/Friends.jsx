import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Friends() {
  return (
    <div
      className="flex h-screen max-w-full flex-col items-center  justify-between break-words"
      style={{
        backgroundImage: `url("../../javier-miranda-AlJ9TQqeCV0-unsplash.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <main>
        <h1>Friends</h1>
      </main>
      <Footer />
    </div>
  )
}
