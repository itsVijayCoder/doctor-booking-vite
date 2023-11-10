import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServicesCard = ({ item, index }) => {
   const { name, desc, bgColor, textColor } = item;
   return (
      <>
         <div className='px-3 lg:px-5 py-7 '>
            <h2 className='text-[26px] text-headingColor leading-9 font-[600] '>
               {name}
            </h2>
            <p className='text-[20px] text-textColor leading-9 font-[400] mt-4'>
               {desc}
            </p>

            <div className='flex items-center justify-between mt-[30px]'>
               <Link
                  to='/doctors'
                  className='w-[40px] h-[40px] rounded-full border border-solid border-[#181a1e] flex items-center justify-center group hover:bg-primaryColor hover:border-none '
               >
                  <BsArrowRight className='group-hover:text-white w-7 h-6' />
               </Link>

               <span
                  className='w-[40px] h-[40px] text-[18px] leading-7 flex items-center justify-center font-[600] '
                  // style={{
                  //    background: `${bgColor}`,
                  //    color: `${textColor}`,
                  //    borderRadius: "6px 0 0 6px",
                  // }}
               >
                  {index + 1}
               </span>
            </div>
         </div>
      </>
   );
};

export default ServicesCard;
