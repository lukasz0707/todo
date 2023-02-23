import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./src/components/Layout"
import Missing from "./src/components/Missing"
import Home from "./src/routes/Home"
import Login from "./src/routes/Login"
import Signup from "./src/routes/Signup"
import Todos from "./src/routes/Todos"
import Friends from "./src/routes/Friends"
import Settings from "./src/routes/Settings"
import About from "./src/routes/About"
import Contact from "./src/routes/Contact"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="todos" element={<Todos />} />
        <Route path="friends" element={<Friends />} />
        <Route path="settings" element={<Settings />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
}
