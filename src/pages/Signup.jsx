import signupImg from "../asserts/images/signup.gif";
import avatar from "../asserts/images/doctor-img01.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
   const [selectedFile, setSelectedFile] = useState(null);
   const [previewURL, setPreviewURL] = useState("");
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      photo: selectedFile,
      gender: "",
      role: "patient",
   });

   const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleFileInputChange = async (e) => {
      const file = e.target.files[0];

      console.log(file);
   };

   const submitHandler = async (e) => {
      e.preventDefault();
   };

   return (
      <div>
         <section className='px-5 xl:px-0'>
            <div className='max-w-[1170px] mx-auto '>
               <div className='grid grid-cols-1 lg:grid-cols-2'>
                  {/* === Img box === */}

                  <div className='hidden lg:block bg-white rounded-l-lg'>
                     <figure className='rounded-l-lg'>
                        <img
                           src={signupImg}
                           alt=''
                           className='w-full rounded-full'
                        />
                     </figure>
                  </div>

                  {/* === sign up === */}

                  <div className='rounded-l-lg lg:pl-16 py-10'>
                     <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 '>
                        {" "}
                        Create an{" "}
                        <span className='text-primaryColor'> Account</span>
                     </h3>

                     <form onSubmit={submitHandler}>
                        <div className='mb-5'>
                           <input
                              type='text'
                              placeholder='Full Name'
                              name='name'
                              value={formData.name}
                              onChange={handleInputChange}
                              className='text-[18px] leading-7 text-headingColor w-full pr-4 py-3  border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor rounded-md cursor-pointer placeholder:text-textColor '
                              required
                           />
                        </div>

                        <div className='mb-5'>
                           <input
                              type='email'
                              placeholder='Enter Your Email'
                              name='email'
                              value={formData.email}
                              onChange={handleInputChange}
                              className='text-[18px] leading-7 text-headingColor w-full pr-4 py-3  border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor rounded-md cursor-pointer placeholder:text-textColor '
                              required
                           />
                        </div>

                        <div className='mb-5'>
                           <input
                              type='password'
                              placeholder='Password'
                              name='password'
                              value={formData.password}
                              onChange={handleInputChange}
                              className='text-[18px] leading-7 text-headingColor w-full pr-4 py-3  border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor rounded-md cursor-pointer placeholder:text-textColor '
                              required
                           />
                        </div>

                        <div className='mb-5 flex items-center justify-between'>
                           <label className='text-headingColor font-bold text-[16px] leading-7 '>
                              Are you a :
                              <select
                                 name='role'
                                 value={formData.role}
                                 onChange={handleInputChange}
                                 className='text-textColor text-[15px] font-semibold leading-7 px-4 py-3 focus:outline-none '
                              >
                                 <option value='patient'>Patient</option>
                                 <option value='doctor'>Doctor</option>
                              </select>
                           </label>

                           <label className='text-headingColor font-bold text-[16px] leading-7 '>
                              Gender :
                              <select
                                 name='gender'
                                 value={formData.gender}
                                 onChange={handleInputChange}
                                 className='text-textColor text-[15px] font-semibold leading-7 px-4 py-3 focus:outline-none '
                              >
                                 <option value='select'>Select</option>
                                 <option value='male'>Male</option>
                                 <option value='female'>Female</option>
                                 <option value='other'>Other</option>
                              </select>
                           </label>
                        </div>

                        <div className='flex items-center gap-3 mb-5'>
                           <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center '>
                              <img
                                 src={avatar}
                                 alt=''
                                 className='w-full rounded-full'
                              />
                           </figure>

                           <div className='relative w-[130px] h-[50px] '>
                              <input
                                 type='file'
                                 name='photo'
                                 id='customFile'
                                 onChange={handleFileInputChange}
                                 accept='.jpg, .png'
                                 className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                              />

                              <label
                                 htmlFor='customFile'
                                 className='absolute top-0 left-0 w-full h-full flex items-center px-[.75rem] py-[.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg cursor-pointer truncate '
                              >
                                 Upload Photo
                              </label>
                           </div>
                        </div>

                        <div className='mb-7'>
                           <button className='btn w-full text-[18px] leading-7 rounded-lg '>
                              Sign Up
                           </button>
                        </div>

                        <p className='mt-5 text-textColor text-center'>
                           Already have an account?{" "}
                           <Link
                              to='/login'
                              className='text-primaryColor font-medium ml-1 text-[17px]'
                           >
                              Login
                           </Link>
                        </p>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Signup;
