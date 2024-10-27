import "../App.css"
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className=" bg-white flex w-full px-[200px] py-[20px] border-b-2 border-[#21212116] justify-between fixed top-0 left-0">
      <div className="flex gap-[32px]">
        <img src={logo} className="h-full"/>
        <nav className="flex gap-[12px] items-center font-medium">
          <a href="" className="active">Home</a>
          <a href="" className="">About</a>
          <a href="" className="">Features</a>
        </nav>
      </div>
      <div className="flex gap-[12px] items-center font-medium">
        <a href="" className="px-[20px] py-[8px] font-semibold">Login</a>
        <a href="" className="border border-[#212121] rounded-[8px] px-[32px] py-[12px] font-semibold shadow-3d bg-white hover:bg-[#DACDF4] transition duration-300">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
