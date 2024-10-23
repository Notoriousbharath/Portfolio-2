// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };
//   return (
//     <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
//       <h1 className="text-3xl font-bold primary-color ml-4">
//         Bharath
//         <ul className="hidden md:flex">
//           <li className="p-5">
//             <a href="#about">About</a>
//             <li className="p-5">
//               <a href="#work">Work</a>
//               <li className="p-5">
//                 <a href="#contact">Contact</a>
//               </li>
//             </li>
//           </li>
//         </ul>
//       </h1>
//       <div onClick={handleNav} className="block md:hidden mr-6">
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       <div
//         className={
//           nav
//             ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
//             : "fixed left-[-100%]"
//         }>
//         <h1 className="text-3xl  primary-color m-4">
//           Bharath
//           <ul className="p-8 text-2xl">
//             <li>
//               <a href="#about">About</a>
//               <li>
//                 <a href="#work">Work</a>
//                 <li>
//                   <a href="#Contact">Contact</a>
//                 </li>
//               </li>
//             </li>
//           </ul>
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
//       <h1 className="text-3xl font-bold primary-color ml-4">Bharath</h1>

//       {/* Desktop Navbar */}
//       <ul className="hidden md:flex">
//         <li className="p-5">
//           <a href="#about">About</a>
//         </li>
//         <li className="p-5">
//           <a href="#work">Work</a>
//         </li>
//         <li className="p-5">
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>

//       {/* Mobile Menu Icon */}
//       <div onClick={handleNav} className="block md:hidden mr-6">
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navbar */}
//       <div
//         className={
//           nav
//             ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
//             : "fixed left-[-100%]"
//         }>
//         <h1 className="text-3xl primary-color m-4">Bharath</h1>
//         <ul className="p-8 text-2xl">
//           <li className="py-2">
//             <a href="#about">About</a>
//           </li>
//           <li className="py-2">
//             <a href="#work">Work</a>
//           </li>
//           <li className="py-2">
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Close the menu when clicking a link in mobile view
  const closeMenu = () => {
    setNav(false);
  };

  return (
    <div className="border border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">Bharath</h1>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#work">Work</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navbar */}
      <div
        className={
          nav
            ? " z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }>
        <h1 className="text-3xl primary-color m-4">Bharath</h1>
        <ul className="p-8 text-2xl">
          <li className="py-2">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="py-2">
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
          </li>
          <li className="py-2">
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
