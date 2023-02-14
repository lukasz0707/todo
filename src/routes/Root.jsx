import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div
     className="flex h-screen flex-col justify-between items-center  max-w-full break-words"
     style={{backgroundImage: `url("../../javier-miranda-AlJ9TQqeCV0-unsplash.jpg")`,
    backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
    >
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  )
}