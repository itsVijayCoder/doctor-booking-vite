import React from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import patientAvatar from "../../asserts/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
   return (
      <div className='mt-7 lg:mt-12'>
         <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
               640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
               },
            }}
         >
            <SwiperSlide>
               <div className='py-7 px-5 mx-7 rounded-xl'>
                  <div className='flex items-center gap-3'>
                     <img src={patientAvatar} alt='' />
                     <div className=''>
                        <h4 className='text-[18px] leading-7 font-semibold text-headingColor'>
                           Tommy
                        </h4>
                        <div className='flex items-center  gap-1'>
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                     </div>
                  </div>

                  <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                     "I have taken medical services from them. They treat so
                     well and providing the best medical services."
                  </p>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className='py-7 px-5 mx-7 rounded-xl'>
                  <div className='flex items-center gap-3'>
                     <img src={patientAvatar} alt='' />
                     <div className=''>
                        <h4 className='text-[18px] leading-7 font-semibold text-headingColor'>
                           Vijay Subramanian
                        </h4>
                        <div className='flex items-center  gap-1'>
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                     </div>
                  </div>

                  <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                     "I have taken medical services from them. They treat so
                     well and providing the best medical services."
                  </p>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className='py-7 px-5 mx-7 rounded-xl'>
                  <div className='flex items-center gap-3'>
                     <img src={patientAvatar} alt='' />
                     <div className=''>
                        <h4 className='text-[18px] leading-7 font-semibold text-headingColor'>
                           Balaji Anand
                        </h4>
                        <div className='flex items-center  gap-1'>
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                     </div>
                  </div>

                  <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                     "I have taken medical services from them. They treat so
                     well and providing the best medical services."
                  </p>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className='py-7 px-5 mx-7 rounded-xl'>
                  <div className='flex items-center gap-3'>
                     <img src={patientAvatar} alt='' />
                     <div className=''>
                        <h4 className='text-[18px] leading-7 font-semibold text-headingColor'>
                           Prem Kumar
                        </h4>
                        <div className='flex items-center  gap-1'>
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                     </div>
                  </div>

                  <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                     "I have taken medical services from them. They treat so
                     well and providing the best medical services."
                  </p>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className='py-7 px-5 rounded-xl'>
                  <div className='flex items-center gap-3'>
                     <img src={patientAvatar} alt='' />
                     <div className=''>
                        <h4 className='text-[18px] leading-7 font-semibold text-headingColor'>
                           Pon Perumal
                        </h4>
                        <div className='flex items-center  gap-1'>
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                           <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                     </div>
                  </div>

                  <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                     "I have taken medical services from them. They treat so
                     well and providing the best medical services."
                  </p>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Testimonial;
