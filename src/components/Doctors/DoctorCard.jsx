import React from "react";
import starIcon from "../../asserts/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
   const {
      id,
      name,
      specialist,
      avgRating,
      totalRating,
      photo,
      totalPatients,
      hospital,
   } = doctor;

   return (
      <div className='p-3 lg:p-5 w-[80%] md:w-full mx-auto shadow-2xl rounded-xl'>
         <div className='w-full md:w-full  mx-auto'>
            <img src={photo} className='w-full rounded-[50%]' alt='' />
         </div>
         <h2 className='text-[18px] leading-7 lg:text-[26px] lg:leading-9 mt-3 lg:mt-5 text-headingColor font-[600] '>
            {name}
         </h2>
         <div className='mt-2 lg:mt-4 flex items-center justify-between'>
            <span className='bg-[#ccf0f3] px-2 py-1 lg:py-2 lg:px-5 text-irisBlueColor text-[12px] leading-4 lg:leading-7 lg:text-[16px] font-[600] rounded-md '>
               {specialist}
            </span>

            <div className='flex items-center gap-1'>
               <span className='flex items-center gap-2 text-[14px] leading-6 lg:text-[16px] lg:leading-7 text-headingColor font-semibold '>
                  <img src={starIcon} alt='' />
                  {avgRating}
               </span>

               <span className='flex items-center gap-2 text-[14px] leading-6 lg:text-[16px] lg:leading-7 text-textColor font-[400]'>
                  ({totalRating})
               </span>
            </div>
         </div>

         <div className='flex items-center justify-between mt-4'>
            <div className=''>
               <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-9 font-semibold text-headingColor '>
                  + {totalPatients} Patients
               </h3>
               <p className='text-[15px] font-[400] text-textColor '>
                  {" "}
                  At {hospital}
               </p>
            </div>

            <Link
               to={`/doctors/${id}`}
               className='w-[40px] h-[40px] rounded-full border border-solid border-[#181a1e] flex items-center justify-center group hover:bg-primaryColor hover:border-none '
            >
               <BsArrowRight className='group-hover:text-white w-7 h-6' />
            </Link>
         </div>
      </div>
   );
};

export default DoctorCard;
