import React from "react";

import { Link } from "react-router-dom";
import { RiLinkedinFill, RiPhoneFill } from "react-icons/ri";
import { MdLocalHospital } from "react-icons/md";
import {
   AiFillYoutube,
   AiFillGithub,
   AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
   {
      path: "tel:+919994353438",
      icon: <RiPhoneFill className='w-4 h-5 group-hover:text-white' />,
   },
   {
      path: "https://youtube.com",
      icon: <AiFillYoutube className='w-4 h-5 group-hover:text-white' />,
   },
   {
      path: "https://github.com/tomvj1258",
      icon: <AiFillGithub className='w-4 h-5 group-hover:text-white' />,
   },
   {
      path: "https://instagram.com/vijaytom_1258/",
      icon: <AiOutlineInstagram className='w-4 h-5 group-hover:text-white' />,
   },
   {
      path: "https://www.linkedin.com/in/vijaysubramanian1258",
      icon: <RiLinkedinFill className='w-4 h-5 group-hover:text-white' />,
   },
];

const quickinks01 = [
   {
      path: "/home",
      display: "Home",
   },
   {
      path: "/",
      display: "About Us",
   },
   {
      path: "/services",
      display: "Services",
   },
   {
      path: "/",
      display: "Blog",
   },
];

const quickinks02 = [
   {
      path: "/find-a-doctor",
      display: "Find a Doctor",
   },
   {
      path: "/",
      display: "Request an Appointment",
   },
   {
      path: "/",
      display: "Find a Location",
   },
   {
      path: "/",
      display: "Get a Opinion",
   },
];

const quickinks03 = [
   {
      path: "/",
      display: "Donate",
   },
   {
      path: "/contact",
      display: "Contact Us",
   },
];

const Footer = () => {
   const year = new Date().getFullYear();
   return (
      <footer className='pb-16 pt-10'>
         <div className='container'>
            <hr className='mb-9' />
            <div className='flex justify-between flex-col lg:flex-row flex-wrap gap-7'>
               <div className='my-auto'>
                  <div className='flex flex-col items-center sm:items-start'>
                     <Link
                        to='/home'
                        className='flex items-center justify-start cursor-pointer'
                     >
                        <MdLocalHospital className='w-8 h-8 my-auto mr-2 text-blue-700' />
                        <h2 className='font-[600] text-2xl'>Mediclient</h2>
                        {/* <img src={logo} alt='logo-png' /> */}
                     </Link>
                     <div>
                        <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 text-center '>
                           Copyright &copy; {year} developed by Vijay
                           Subramanian all right reserved.{" "}
                        </p>
                     </div>
                     <div className='flex items-center gap-3 mt-2'>
                        {socialLinks.map((link, index) => (
                           <Link
                              to={link.path}
                              key={index}
                              className='w-10 h-10 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '
                           >
                              {link.icon}
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>

               <div className=''>
                  <h2 className='text-[20px] leading-7 font-[700] mb-6 text-headingColor '>
                     Quick Links
                  </h2>

                  <ul>
                     {quickinks01.map((item, index) => (
                        <li key={index} className='mb-4'>
                           <Link
                              to={item.path}
                              className='text-[16px] leading-7 font-[400] text-textColor '
                           >
                              {item.display}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div className=''>
                  <h2 className='text-[20px] leading-7 font-[700] mb-6 text-headingColor '>
                     I Want to:
                  </h2>

                  <ul>
                     {quickinks02.map((item, index) => (
                        <li key={index} className='mb-4'>
                           <Link
                              to={item.path}
                              className='text-[16px] leading-7 font-[400] text-textColor '
                           >
                              {item.display}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               <div className=''>
                  <h2 className='text-[20px] leading-7 font-[700] mb-6 text-headingColor '>
                     Support
                  </h2>

                  <ul>
                     {quickinks03.map((item, index) => (
                        <li key={index} className='mb-4'>
                           <Link
                              to={item.path}
                              className='text-[16px] leading-7 font-[400] text-textColor '
                           >
                              {item.display}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
