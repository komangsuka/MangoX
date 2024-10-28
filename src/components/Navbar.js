import "../App.css"
import logo from "../assets/logo.svg"
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("hero");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div className=" bg-white flex w-full px-[200px] py-[20px] border-b-2 border-[#21212116] justify-between fixed top-0 left-0">
      <div className="flex gap-[32px]">
        <img src={logo} className="h-full"/>
        <nav className="flex gap-[12px] items-center font-medium">
          <a href="#hero" className={activeLink === "hero" ? "active" : ""} 
          onClick={() => handleSetActive("hero")}>Home</a>

          <a href="#features" className={activeLink === "features" ? "active" : ""}
        onClick={() => handleSetActive("features")}>Features</a>

          <a href="#testi" className={activeLink === "testi" ? "active" : ""}
        onClick={() => handleSetActive("testi")}>Testimonials</a>
        </nav>
      </div>
      <div className="flex gap-[12px] items-center font-medium">
        <a href="#getStarted" className="px-[20px] py-[8px] font-semibold">Login</a>
        <a href="#getStarted" className="border border-[#212121] rounded-[8px] px-[32px] py-[12px] font-semibold shadow-3d bg-white hover:bg-[#DACDF4] transition duration-300">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
