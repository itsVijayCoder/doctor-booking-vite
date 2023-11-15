import heroImg01 from "../asserts/images/hero-img01.png";
import heroImg02 from "../asserts/images/hero-img02.png";
import heroImg03 from "../asserts/images/hero-img03.png";
import icon01 from "../asserts/images/icon01.png";
import icon02 from "../asserts/images/icon02.png";
import icon03 from "../asserts/images/icon03.png";
import featureImg from "../asserts/images/feature-img.png";
import videoIcon from "../asserts/images/video-icon.png";
import avatarIcon from "../asserts/images/avatar-icon.png";
import faqImg from "../asserts/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/FAQ/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
   return (
      <>
         {/* =====hero-Section===== */}

         <section className='hero-section pt-[60px] xl:h-[800px] bg-gradient-to-br from-emerald-200 from-2% via-white via-40% to-red-100 to-120%'>
            <div className='container '>
               <div className='flex flex-col lg:flex-row items-center justify-between gap-20 '>
                  {/* =====hero-content===== */}

                  <div>
                     <div className='lg:w-[570px]'>
                        <h1 className='text-headingColor text-[36px] leading-[46px] font-[600] md:text-[60px] md:leading-[70px]'>
                           We help patients live a healthy, longer life
                        </h1>
                        <p className='text-para'>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Modi cumque optio repellat esse eveniet id
                           quibusdam nesciunt. Soluta, eveniet iusto.
                        </p>
                        <Link to='doctors'>
                           <button className='btn'>
                              Request an Appointment
                           </button>
                        </Link>
                     </div>

                     <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                        <div>
                           <h2 className='text-[30px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[500] text-headingColor '>
                              30+
                           </h2>
                           <span className='h-2 w-[90px] bg-yellowColor block rounded-full mt-[-10px]  '></span>
                           <p className='text-para'>Years of Experience</p>
                        </div>

                        <div>
                           <h2 className='text-[30px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[500] text-headingColor '>
                              15+
                           </h2>
                           <span className='h-2 w-[85px] bg-purpleColor block rounded-full mt-[-10px]  '></span>
                           <p className='text-para'>Clinic Location</p>
                        </div>

                        <div>
                           <h2 className='text-[30px] leading-[56px] lg:text-[39px] lg:leading-[54px] font-[500] text-headingColor '>
                              100%
                           </h2>
                           <span className='h-2 w-[95px] bg-irisBlueColor block rounded-full mt-[-10px]  '></span>
                           <p className='text-para'>Patiens Satisfaction</p>
                        </div>
                     </div>
                  </div>

                  {/* =====hero-Image===== */}

                  <div className='flex gap-[30px] items-center '>
                     <div>
                        <img
                           src={heroImg01}
                           alt='HeroImage01'
                           className='w-full rounded-full'
                        />
                     </div>

                     <div className='mt-[30px]  '>
                        <img
                           src={heroImg02}
                           alt='HeroImage02'
                           className='w-full mb-[30px] rounded-t-full'
                        />

                        <img
                           src={heroImg03}
                           alt='HeroImage03'
                           className='w-full mb-[30px] rounded-b-full'
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* =====Find Doctor===== */}

         <section>
            <div className='container'>
               <div className='mx-auto lg:w-[470px] '>
                  <h2 className='text-center head-2'>
                     Providing the best medical services
                  </h2>
                  <p className='text-para text-center'>
                     World-class care for everyone. Our health System offers
                     unmatched,expert health care.
                  </p>
               </div>

               <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
                  <div className='py-[30px] px-5'>
                     <div className='flex items-center justify-center'>
                        <img src={icon01} alt='' />
                     </div>

                     <div className='mt-[30px] '>
                        <h2 className='text-center text-headingColor text-[26px] font-[500] '>
                           Find a Doctor
                        </h2>
                        <p className='text-para text-center'>
                           World-class care for everyone. Our health System
                           offers unmatched,expert health care. From the lab to
                           the clinic.
                        </p>

                        <Link
                           to='doctors'
                           className='w-[40px] h-[40px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '
                        >
                           <BsArrowRight className='group-hover:text-white w-7 h-6' />
                        </Link>
                     </div>
                  </div>

                  <div className='py-[30px] px-5'>
                     <div className='flex items-center justify-center'>
                        <img src={icon02} alt='' />
                     </div>

                     <div className='mt-[30px] '>
                        <h2 className='text-center text-headingColor text-[26px] font-[500] '>
                           Find a Location
                        </h2>
                        <p className='text-para text-center'>
                           World-class care for everyone. Our health System
                           offers unmatched,expert health care. From the lab to
                           the clinic.
                        </p>

                        <Link
                           to='doctors'
                           className='w-[40px] h-[40px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '
                        >
                           <BsArrowRight className='group-hover:text-white w-7 h-6' />
                        </Link>
                     </div>
                  </div>

                  <div className='py-[30px] px-5'>
                     <div className='flex items-center justify-center'>
                        <img src={icon03} alt='' />
                     </div>

                     <div className='mt-[30px] '>
                        <h2 className='text-center text-headingColor text-[26px] font-[500] '>
                           Book Appointment
                        </h2>
                        <p className='text-para text-center'>
                           World-class care for everyone. Our health System
                           offers unmatched,expert health care. From the lab to
                           the clinic.
                        </p>

                        <Link
                           to='doctors'
                           className='w-[40px] h-[40px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '
                        >
                           <BsArrowRight className='group-hover:text-white w-7 h-6' />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* =====about Section start ===== */}

         <About />

         {/* ==== services section start ==== */}

         <section>
            <div className='container'>
               <div className='mx-auto xl:w-[470px]'>
                  <h2 className='head-2 text-center'>Our medical services</h2>
                  <p className='text-para text-center'>
                     World-class care for everyone. Our health System offers
                     unmatched,expert health care.
                  </p>
               </div>

               <ServicesList />
            </div>
         </section>

         {/* ==== services section End ==== */}

         {/* ==== Features section Start ==== */}

         <section>
            <div className='container'>
               <div className='flex items-center justify-between flex-col lg:flex-row'>
                  {/* ==== features content ==== */}
                  <div className='xl:w-[670px] order-2 md:order-1'>
                     <h2 className='head-2'>
                        Get virtual treatment <br /> anywhere.
                     </h2>
                     <ul className='pl-4'>
                        <li className='text-para'>
                           1. Schedule the appointment directly.
                        </li>
                        <li className='text-para'>
                           2. Search for your physician here, and contact their
                           office.
                        </li>
                        <li className='text-para'>
                           3. View our physicians who are accepting new
                           patients, use the online scheduling tool to select an
                           appointment time.
                        </li>
                     </ul>
                     <div className='flex justify-center lg:justify-start'>
                        <Link to='/doctor-booking-vite'>
                           <button className='btn '>Learn More</button>
                        </Link>
                     </div>
                  </div>

                  <div className='relative flex w-[80%] justify-end z-30 mb-[50px] md:w-1/2 md:mt-[50px] lg:mt-0 lg:w-[750px] order-1 md:order-2 '>
                     <img
                        src={featureImg}
                        className='md:rounded-[20%]'
                        alt=''
                     />

                     <div className='absolute bg-white w-[150px] rounded  px-2 py-1 bottom-0 left-[-40px] md:left-[-100px] md:bottom-10 lg:w-[200px] lg:bottom-20  lg:left-[-130px] xl:left-[130px]   z-20 shadow-xl'>
                        <div className='flex items-center justify-between '>
                           <div className='flex items-center  gap-2 lg:gap-3'>
                              <p className='text-[15px] leading-3 lg:text-lg lg:leading-5 text-headingColor font-[600] '>
                                 Tue, 24
                              </p>
                              <p className='text-[11px] leading-3 lg:text-lg lg:leading-5 text-textColor font-[500] '>
                                 10.00AM
                              </p>
                           </div>

                           <span className='w-6 h-6 lg:w-7 lg:h-7 bg-yellowColor flex justify-center items-center rounded   '>
                              <img src={videoIcon} alt='' />
                           </span>
                        </div>

                        <div className='w-3/4 bg-[#CCF0F3] py-1 px-3 lg:py-2 lg:px-4 text-[10px] lg:text-[16px] leading-[8px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full  '>
                           Consultation
                        </div>

                        <div className='flex items-center gap-3 mt-3 lg:mt-4'>
                           <img src={avatarIcon} alt='' />
                           <h4 className='text-[12px] leading-3 lg:text-[16px] lg:leading-5 font-[700] text-headingColor '>
                              Wayne Collins
                           </h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* ==== Features section End ==== */}

         {/* ==== Our Great Doctors start ==== */}

         <section>
            <div className='container'>
               <div className='mx-auto xl:w-[470px]'>
                  <h2 className='head-2 text-center'>Our great doctors</h2>
                  <p className='text-para text-center'>
                     World-class care for everyone. Our health System offers
                     unmatched,expert health care.
                  </p>
               </div>

               <DoctorList />
            </div>
         </section>

         {/* ==== Our Great Doctors End  ==== */}

         {/* ==== FAQ section start  ==== */}

         <section>
            <div className='container'>
               <div className='flex justify-between gap-12 lg:gap-0'>
                  <div className='w-1/2 hidden md:block'>
                     <img src={faqImg} className='rounded-[30%]' alt='' />
                  </div>

                  <div className='w-full md:w-1/2'>
                     <h2 className='heading'>
                        Most questions by our beloved patients.
                     </h2>

                     <FaqList />
                  </div>
               </div>
            </div>
         </section>

         {/* ==== FAQ section End  ==== */}

         {/* ==== Testimonial start  ==== */}

         <section>
            <div className='container'>
               <div className='mx-auto xl:w-[470px]'>
                  <h2 className='head-2 text-center'>What our patients say</h2>
                  <p className='text-para text-center'>
                     World-class care for everyone. Our health System offers
                     unmatched,expert health care.
                  </p>
               </div>
               <Testimonial />
            </div>
         </section>
         {/* ==== Testimonial end  ==== */}
      </>
   );
};

export default Home;
