import React, { useEffect, useRef } from "react";
import userImg from "../../asserts/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { MdLocalHospital } from "react-icons/md";

import { NavLink, Link } from "react-router-dom";

const navLinks = [
   {
      id: 1,
      path: "/home",
      display: "Home",
   },
   {
      id: 2,
      path: "/doctors",
      display: "Find a Doctor",
   },
   {
      id: 3,
      path: "/services",
      display: "Services",
   },
   {
      id: 4,
      path: "/contact",
      display: "Contact",
   },
];

const Header = () => {
   const headerRef = useRef(null);
   const menuRef = useRef(null);

   const handleStickyHeader = () => {
      window.addEventListener("scroll", () => {
         document.body.scrollTop > 600 ||
         document.documentElement.scrollTop > 600
            ? headerRef.current.classList.add("sticky-header")
            : headerRef.current.classList.remove("sticky-header");
      });
   };

   useEffect(() => {
      handleStickyHeader();

      return () => window.removeEventListener("scroll", handleStickyHeader);
   }, []);

   const toggleMenu = () => menuRef.current.classList.toggle("show-menu");

   return (
      <header
         className='flex items-center bg-gradient-to-r from-emerald-100 from-40% via-white via-60% to-red-100 to-120% h-[80px] leading-[60px] w-full'
         ref={headerRef}
      >
         <div className='container'>
            <div className='flex items-center justify-between '>
               {/* ===== Logo ===== */}

               <NavLink to='/home' className='flex items-center justify-center'>
                  <MdLocalHospital className='w-8 h-8 my-auto mr-2 text-blue-700' />

                  <h2 className='font-[600] text-2xl'>Mediclient</h2>
                  {/* <img src={logo} alt='logo-png' /> */}
               </NavLink>

               <div className='navigate' ref={menuRef} onClick={toggleMenu}>
                  <ul className='menu flex items-center gap-8'>
                     {navLinks.map((link) => {
                        return (
                           <li key={link.id}>
                              <NavLink
                                 to={link.path}
                                 className={(navClass) =>
                                    navClass.isActive
                                       ? "text-primaryColor text-[18px] leading-7 font-[600]"
                                       : "text-textColor text-[18px] leading-7 font-[500] hover:text-primaryColor"
                                 }
                              >
                                 {link.display}
                              </NavLink>
                           </li>
                        );
                     })}
                  </ul>
               </div>

               <div className='flex items-center'>
                  <div>
                     <Link to='/'>
                        <figure className='w-9 h-9 rounded-full my-2 cursor-pointer'>
                           <img
                              src={userImg}
                              className='w-full rounded-full '
                              alt='avatar-logo'
                           />
                        </figure>
                     </Link>
                  </div>

                  <Link to='/login'>
                     <button className='bg-primaryColor text-white px-4 py-2 mx-3 font-[600] h-11 rounded-3xl flex items-center hover:bg-blue-700'>
                        Login
                     </button>
                  </Link>

                  <span className='relative lg:hidden' onClick={toggleMenu}>
                     <BiMenu className='h-7 w-7 cursor-pointer' />
                  </span>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
