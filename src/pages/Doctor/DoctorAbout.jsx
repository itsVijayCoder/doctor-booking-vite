import React from "react";
import { formatDate } from "../../utils/formatDate";

const DoctorAbout = ({ doctor }) => {
   return (
      <div>
         <div>
            <h3 className='text-[20px] leading-8 text-headingColor font-semibold flex items-center gap-2 '>
               About of
               <span className='text-[24px] text-irisBlueColor font-bold leading-9 '>
                  {doctor.name}
               </span>
            </h3>
            <p className='text-para'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
               tempore officia, possimus similique ab sit esse adipisci nihil,
               dolorum, accusantium iste maxime? Tempore, exercitationem. Facere
               accusantium, mollitia nostrum doloremque aliquid, aliquam
               quisquam repellat debitis consequatur corrupti cumque doloribus,
               ab nesciunt libero temporibus. Nemo, placeat! Maxime eos
               excepturi velit explicabo natus?
            </p>
         </div>

         <div className='mt-12'>
            <h3 className='text-[20px] leading-8 text-headingColor font-semibold'>
               Education
            </h3>

            <ul className='pt-4 md:p-5'>
               <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-7'>
                  <div className=''>
                     <span className='text-irisBlueColor text-[15px] leading-5 font-semibold '>
                        {formatDate("09-12-2014")} - {formatDate("07-12-2016")}
                     </span>
                     <p className='text-[16px] leading-6 text-headingColor font-medium '>
                        PHD in {doctor.specialist}
                     </p>
                  </div>
                  <p className='text-[14px] leading-5 text-headingColor font-medium '>
                     New Apollo Hospital, Chennai
                  </p>
               </li>

               <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-7'>
                  <div className=''>
                     <span className='text-irisBlueColor text-[15px] leading-5 font-semibold '>
                        {formatDate("06-12-2010")} - {formatDate("08-12-2014")}
                     </span>
                     <p className='text-[16px] leading-6 text-headingColor font-medium '>
                        PHD in {doctor.specialist}
                     </p>
                  </div>
                  <p className='text-[14px] leading-5 text-headingColor font-medium '>
                     New Apollo Hospital, Chennai
                  </p>
               </li>
            </ul>
         </div>

         <div className='mt-12'>
            <h3 className='text-[20px] leading-8 text-headingColor font-semibold'>
               Experience
            </h3>

            <ul className='grid sm:grid-cols-2 gap-7 pt-4 md:p-5'>
               <li className='rounded p-4 bg-[#fff9ea]'>
                  <span className='text-[15px] leading-6 text-yellowColor font-semibold '>
                     {formatDate("09-12-2014")} - {formatDate("07-12-2016")}
                  </span>
                  <p className='text-[16px] leading-6 text-headingColor font-medium '>
                     Sr. {doctor.specialist}
                  </p>

                  <p className='text-[14px] leading-5 text-headingColor font-medium '>
                     New Apollo Hospital, Chennai
                  </p>
               </li>

               <li className='rounded p-4 bg-[#fff9ea]'>
                  <span className='text-[15px] leading-6 text-yellowColor font-semibold '>
                     {formatDate("09-12-2014")} - {formatDate("07-12-2016")}
                  </span>
                  <p className='text-[16px] leading-6 text-headingColor font-medium '>
                     Sr. {doctor.specialist}
                  </p>

                  <p className='text-[14px] leading-5 text-headingColor font-medium '>
                     New Apollo Hospital, Chennai
                  </p>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default DoctorAbout;
