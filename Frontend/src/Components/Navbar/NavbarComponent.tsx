import React from 'react'
// import { FaHome } from "react-icons/fa";
import { IoWalkSharp } from "react-icons/io5";
import { FaFaceSadTear } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
import { GiShinyEntrance } from "react-icons/gi";
import { FaRandom } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { CgGym } from "react-icons/cg";

const NavbarComponent:React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-5">
  <NavLink to="/gym" className=" bg-amber-300 text-amber-800 w-32 h-32 flex items-center justify-center flex-col shadow-lg shadow-amber-400 rounded-lg">
     <CgGym />
    <span className="btm-nav-label text-xs sm:text-lg md:text-md">Gym</span>
  </NavLink>
  <NavLink to="/dancing"className="bg-rose-200 text-rose-600 w-32 h-32 flex items-center justify-center flex-col shadow-lg shadow-rose-600 rounded-lg">
  <IoWalkSharp />
    <span className="btm-nav-label text-xs sm:text-lg md:text-md">Dancing</span>
  </NavLink>
  <NavLink to="/sad"className="bg-teal-200 text-teal-600 w-32 h-32 flex items-center justify-center flex-col shadow-lg shadow-teal-600 rounded-lg">
  <FaFaceSadTear />
    <span className="btm-nav-label text-xs sm:text-lg md:text-md">Sad</span>
  </NavLink>
  <NavLink to="/muslim"className= "border-blue-600 bg-blue-200 text-blue-600 w-32 h-32 flex items-center justify-center flex-col shadow-lg shadow-blue-600 rounded-lg">
    <FaMoon />
    <h6 className="btm-nav-label text-xs sm:text-lg md:text-md flex items-center justify-center flex-col text-ellipsis">  Muslim <span>Songs </span></h6>
  </NavLink>
  <NavLink to="/hindu"className=" bg-orange-200 text-orange-600 w-32 h-32 flex items-center justify-center flex-col shadow-lg shadow-orange-600 rounded-lg">
  <MdTempleHindu />
    <span className="btm-nav-label text-xs sm:text-lg md:text-md">Hindu <span className="hidden sm:block"> Song </span></span>
  </NavLink>
  <NavLink to="/virals"className="bg-purple-200 text-purple-600 w-32 h-32 flex items-center justify-center flex-col shadow-lg shadow-purple-600 rounded-lg">
  <GiShinyEntrance />
    <span className="btm-nav-label text-xs sm:text-lg md:text-md"> Virals </span>
  </NavLink>
  <NavLink to="/random"className="bg-yellow-200 text-yellow-600 w-32 h-32 flex items-center justify-center flex-col shadow-lg shadow-yellow-600 rounded-lg">
    <FaRandom />
    <span className="btm-nav-label text-xs sm:text-lg md:text-md"> Random </span>
  </NavLink>
</div>
  )
}

export default NavbarComponent
