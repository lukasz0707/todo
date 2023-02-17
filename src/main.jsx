import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Root from "./routes/Root"
import { AuthProvider } from "./context/AuthProvider"

import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import ErrorPage from "./error-page"
import Login from "./routes/Login"
import Signup from "./routes/Signup"
import Todos from "./routes/Todos"
import Friends from "./routes/Friends"
import Settings from "./routes/Settings"
import About from "./routes/About"
import Contact from "./routes/Contact"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <RouterProvider router={<AuthProvider>router</AuthProvider>} />
  // </React.StrictMode>
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Root />} path="/" errorElement={<ErrorPage />} />
          <Route element={<Login />} path="/login" errorElement={<ErrorPage />} />
          <Route element={<Signup />} path="/signup" errorElement={<ErrorPage />} />
          <Route element={<Todos />} path="/todos" errorElement={<ErrorPage />} />
          <Route element={<Friends />} path="/friends" errorElement={<ErrorPage />} />
          <Route element={<About />} path="/about" errorElement={<ErrorPage />} />
          <Route element={<Contact />} path="/contact" errorElement={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
