import { useState } from "react";
import starIcon from "../../asserts/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { doctors } from "./../../asserts/data/doctorData";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
   const { id } = useParams();
   const [tab, setTab] = useState("about");

   const doc = doctors.filter((doc) => doc.id === id).map((doctor) => doctor);

   const [doctor] = doc;

   console.log(doctor.name);
   console.log(id);

   !doctor && <p>Doctor not Found..</p>;

   return (
      <>
         <section>
            <div className=' max-w-[1170px] mx-auto px-5'>
               <div className='grid md:grid-cols-3 gap-5'>
                  <div className='md:col-span-2'>
                     <div className='flex items-center gap-3'>
                        <figure className='max-w-[200px] max-h-[200px]  '>
                           <img
                              src={doctor.photo}
                              alt=''
                              className='rounded-full w-full'
                           />
                        </figure>

                        <div className='mt-4'>
                           <span className='bg-[#ccf0f3] text-irisBlueColor py-2 px-4 lg:py-3 lg:px-6 font-semibold rounded text-[12px] leading-4 lg:text-[16px] lg:leading-7 '>
                              {doctor.specialist}
                           </span>
                           <h3 className='mt-5 text-headingColor text-[22px] leading-9 font-bold'>
                              {doctor.name}
                           </h3>

                           <div className='flex items-center gap-1'>
                              <span className='flex items-center gap-2 text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor '>
                                 <img src={starIcon} alt='' />{" "}
                                 {doctor.avgRating}
                              </span>
                              <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                                 {doctor.totalRating}
                              </span>
                           </div>

                           <p className='text-para text-[14px] leading-5 md:text-[15px] lg:max-w-[400px] '>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. At, quasi?
                           </p>
                        </div>
                     </div>

                     <div className='mt-12 border-b border-solid border-[#0066ff34] '>
                        <button
                           onClick={() => setTab("about")}
                           className={`${
                              tab === "about" &&
                              "border-b border-solid border-primaryColor"
                           } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold text-headingColor`}
                        >
                           About
                        </button>

                        <button
                           onClick={() => setTab("feedback")}
                           className={`${
                              tab === "feedback" &&
                              "border-b border-solid border-primaryColor"
                           } py-2 px-5 mr-5 text-[16px] leading-7 font-semibold text-headingColor`}
                        >
                           Feedback
                        </button>
                     </div>
                     <div className='mt-12'>
                        {tab === "about" && <DoctorAbout doctor={doctor} />}
                        {tab === "feedback" && <Feedback />}
                     </div>
                  </div>

                  <div className=''>
                     <SidePanel />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default DoctorDetails;
