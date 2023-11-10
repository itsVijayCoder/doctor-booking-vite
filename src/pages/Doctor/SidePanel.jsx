import React from "react";

const SidePanel = () => {
   return (
      <div>
         <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
            <div className='flex items-center justify-between'>
               <p className='text-para mt-0 font-semibold'>Ticket Price</p>
               <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-9 text-headingColor font-bold '>
                  ₹: 500
               </span>
            </div>

            <div className='mt-7'>
               <p className='text-para mt-0 font-semibold text-headingColor'>
                  Available time Slots:
               </p>

               <ul className='mt-3'>
                  <li className='flex items-center justify-between mb-2 '>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        Sunday
                     </p>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        4.00PM - 9.30PM
                     </p>
                  </li>
                  <li className='flex items-center justify-between mb-2'>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        Tuesday
                     </p>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        4.00PM - 9.30PM
                     </p>
                  </li>
                  <li className='flex items-center justify-between mb-2'>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        Wednesday
                     </p>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        4.00PM - 9.30PM
                     </p>
                  </li>
                  <li className='flex items-center justify-between mb-2'>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        Friday
                     </p>
                     <p className='text-[13px] lg:text-[15px] leading-4 lg:leading-6 font-semibold text-textColor '>
                        4.00PM - 9.30PM
                     </p>
                  </li>
               </ul>

               <button className='btn px-2 w-full rounded-md'>
                  Book Appointment
               </button>
            </div>
         </div>
      </div>
   );
};

export default SidePanel;
