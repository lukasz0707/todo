import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { AuthProvider } from "./context/AuthProvider"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/error-page"

import App from "../App"

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
          <Route element={<App />} path="/*" errorElement={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
