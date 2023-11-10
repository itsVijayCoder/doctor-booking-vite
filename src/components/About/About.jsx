import aboutImg from "../../asserts/images/about.png";
import aboutCardImg from "../../asserts/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
   return (
      <>
         <section>
            <div className='container'>
               <div className='flex  justify-between flex-col lg:flex-row lg:items-center gap-[50px] lg:gap-[130px] xl:gap-0 '>
                  {/* === about img === */}

                  <div className='relative flex w-[80%] mx-auto md:w-1/2 md:mx-auto xl:w-[770px] xl:justify-start z-10 order-2 lg:order-1'>
                     <img src={aboutImg} className='md:rounded-[20%]' alt='' />

                     <div className='absolute flex w-[250px] top-[65%] right-[-20%] md:w-[400px] md:left-[160px] md:bottom-0 lg:left-[50%]'>
                        <img src={aboutCardImg} alt='' />
                     </div>
                  </div>

                  {/* === about content === */}

                  <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 '>
                     <h2 className='head-2'>
                        Proud to be one of the nations best
                     </h2>
                     <p className='text-para'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At consequatur illum earum ullam suscipit explicabo
                        recusandae officia doloremque, vel soluta magni sequi
                        fugiat rem asperiores.
                     </p>
                     <p className='text-para mt-[30px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum ratione culpa blanditiis vel nemo
                        perspiciatis soluta, saepe illum eligendi doloremque et,
                        perferendis officia. Quas, eum.
                     </p>

                     <div className='flex justify-center lg:justify-start'>
                        <Link to='/'>
                           <button className='btn '>Learn More</button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default About;
