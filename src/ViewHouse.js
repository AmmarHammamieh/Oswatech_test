import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { TbCrown } from 'react-icons/tb';
import { HiFire } from 'react-icons/hi';
import { BiWifi } from 'react-icons/bi';
import { GiWindow } from 'react-icons/gi';
import { AiFillPicture } from 'react-icons/ai';
import { FaBath } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { MdLocalHospital } from 'react-icons/md';
import { MdLocalParking } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { RiDoorOpenLine } from 'react-icons/ri';
import ALBusra from "./Images/HomePage/ALBusra.svg";

import BigMap from "./Images/ViewHousePage/BigMap.svg";
import restaurant from "./Images/ViewHousePage/restaurant.svg";
import Dublex from "./Images/ViewHousePage/Dublex.svg";
import garage from "./Images/ViewHousePage/garage.svg";
import air from "./Images/ViewHousePage/air.svg";
import video from "./Images/ViewHousePage/video.svg";


import Footer from './components/Footer';
import Header from './components/Header';
import ViewCard from './components/ViewHousePage/ViewCard';
import { Carousel } from 'react-responsive-carousel';


function ViewHouse() {
  return (
      <div>
          <Header />
         <div className='px-7'>
          <div className='w-full '>
          <div className='flex space-x-3 mt-5'>
              <div className='flex items-center'>
                  <IoIosArrowBack className='text-[#0D323D]'/>
                  <p className='font-Montserrat-Bold text-[#0D323D]'>Back</p>
              </div>
              <p className='text-[#707070] font-Montserrat-Regular'>Last Page Name</p>
          </div>
            <div className='flex flex-col mt-10 mb-5'>
                  <p className='font-Montserrat-Bold'>Kansas Rental Buildings - New Baghdad</p>   
                  <p className='font-Montserrat-Regular text-[#707070]'>1434 E Kael St, Mesa, AZ 85203</p>   
             </div>
            
                  <div className='flex w-full flex-col lg:flex-row'>
                  <div className='w-full lg:w-1/2'>
                          <Carousel showStatus={false} showIndicators={false} className="w-full lg:pr-5 mx-auto">
                              <img alt="ALBusra" src={ALBusra} />
                              <img alt="ALBusra" src={ALBusra}/>
                              <img alt="ALBusra" src={ALBusra}/>
                              <img alt="ALBusra" src={ALBusra} />
                              <img alt="ALBusra" src={ALBusra}/>
                              <img alt="ALBusra" src={ALBusra}/>
                              <img alt="ALBusra" src={ALBusra}/>
                              <img alt="ALBusra" src={ALBusra}/>
                              <img alt="ALBusra" src={ALBusra}/>
                              
                              
                  </Carousel>
                  </div>
                  <div className='lg:w-1/2'>
                      <div className='flex justify-between w-full mb-5 lg:mb-0'>
                      <div className="flex ">
                          <div className="flex space-x-3 items-center pr-5 py-2">
                              <p className='font-Montserrat-Bold text-xl'>3,000$</p>
                              <p className='font-Montserrat-Regular text-[#019DB3]'>per month</p>
                          </div>
                          <div className="flex space-x-2 items-center px-5 py-2 border-l-2">
                              <TbCrown className='text-2xl'/>
                              <p className='font-Montserrat-Bold text-[#0D323D]'>Owned By: <span className='font-Montserrat-Medium text-[#515151] ml-1'>IZAR</span></p>
                          </div>

                          </div>
                          <button className='font-Montserrat-Medium px-2 py-2 border-2 flex items-center rounded-lg text-[#0D323D] border-[#0D323D]'><RiShareForwardLine className='mr-2'/>Share</button>
                      </div>
                      <div>
                          <ul className='text-[#515151] font-Montserrat-Regular'>
                              <li>799,0004$ bd3 ba-- sqft</li>
                              <li>545 E Park Avenuse, Long Beeach, NY 11561</li>
                              <li>For SaleZestimate&reg;: 786,700$</li>
                              <li>Est. Payment: 5,324/mo</li>
                              <li>Get pre-qualified</li>
                              <li>For SaleZestimate&reg;: 786,700$</li>
                              <li>Get pre-qualified</li>
                          </ul>

                          <div className='mt-5'>
                              
                              <div className='flex items-center justify-between w-full'>
                                 <div className='flex flex-col space-y-2'>
                                  <div className='flex space-x-3 items-center'>
                                        <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                        <BiWifi className='text-white text-sm'/>
                                        </div>
                                        <p className='text-[#515151] font-Montserrat-Bold'>Wifi Enabled</p>
                                  </div>
                                  <div className='flex space-x-3 items-center' >
                                            <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                            <FaBed className='text-white text-sm'/>
                                            </div>
                                            <p className='text-[#515151] font-Montserrat-Bold'>2 BEDS</p>
                                      </div>
                                  </div>
                                  
                                  <div className='flex flex-col space-y-2'>
                                   <div className='flex space-x-3 items-center' >
                                            <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                                <AiFillPicture className='text-white text-sm'/>
                                            </div>
                                            <p className='text-[#515151] font-Montserrat-Bold'>Nice View</p>
                                  </div>
                                  
                                  <div className='flex space-x-3 items-center'>
                                        <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                        <FaBath className='text-white text-sm'/>
                                        </div>
                                        <p className='text-[#515151] font-Montserrat-Bold'>2 Baths</p>
                                      </div>
                                  </div>

                                  <div className='flex flex-col space-y-2'>

                                  <div className='flex space-x-3 items-center' >
                                            <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                            <HiFire className='text-white text-sm'/>
                                            </div>
                                            <p className='text-[#515151] font-Montserrat-Bold'>Heater</p>
                                   </div>
                                   <div className='flex space-x-3 items-center' >
                                            <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                            <GiWindow className='text-white text-sm'/>
                                            </div>
                                            <p className='text-[#515151] font-Montserrat-Bold'>3 Windows</p>
                                      </div>
                                  </div>
                                      
                              </div>

                              
                              <div className='flex items-center justify-between w-full mt-5'>
                                  <button className='w-[46%] py-2 px-6 border-2 rounded-lg flex items-center font-Montserrat-Bold justify-center border-[#0D323D]'><RiWhatsappFill className='mr-2 text-2xl'/> Saller Details</button>
                                  <button className='w-[46%] py-2 justify-center border-2 rounded-lg flex items-center font-Montserrat-Bold border-[#0D323D]'><BsFillPersonBadgeFill className='mr-2 text-2xl'/>  Saller WhatsApp</button>
                                  
                              </div>
                          </div>
                          
                          
                      </div>
                  </div>


                 
              </div>
          </div>

              
              <div className='mt-10'>
                  <h1 className='font-Montserrat-Bold mb-5'>Location and near places:</h1>
                  <div className='lg:flex grid grid-cols-2 gap-2 space-x-10 justify-center '>
                  <div className='lg:w-80 flex flex-col  rounded-xl shadow-md items-center p-2'>
                      <img alt="BigMap" src={BigMap} className="w-full h-50 "/>
                      <p className='font-Montserrat-Regular mt-2 text-[#0D323D]'>House Location</p>
                  </div>
                  <div className='w-48 flex flex-col  rounded-xl shadow-md items-center p-2'>
                          <div className="bg-center bg-SmallMap w-full h-full bg-contain bg-no-repeat flex items-center justify-center">
                          <div className='p-2 bg-white w-fit rounded-xl '>
                                            <img alt="restaurant" src={restaurant} className='w-8'/>
                          </div>
                              </div>
                      <p className='font-Montserrat-Regular mt-2 text-[#0D323D]'>Nearby resturants</p>
                      </div>

                      <div className='w-48 flex flex-col  rounded-xl shadow-md items-center p-2'>
                          <div className="bg-center bg-SmallMap w-full h-full bg-[length:100%] py-10 lg:py-0 lg:bg-contain bg-no-repeat flex items-center justify-center">
                          <div className='p-2 bg-white w-fit rounded-xl '>
                                            <MdLocalHospital  className='text-4xl'/>
                          </div>
                              </div>
                      <p className='font-Montserrat-Regular mt-2 text-[#0D323D]'>Nearby hospital</p>
                      </div>
                      <div className='w-48 flex flex-col  rounded-xl shadow-md items-center p-2'>
                          <div className="bg-center bg-SmallMap w-full h-full  bg-contain bg-no-repeat flex items-center justify-center">
                          <div className='p-2 bg-white w-fit rounded-xl '>
                                  <MdLocalParking  className='text-4xl'/>

                          </div>
                              </div>
                      <p className='font-Montserrat-Regular mt-2 text-[#0D323D]'>Nearby parking</p>
                      </div>
                      <div className='w-48 flex flex-col  rounded-xl shadow-md items-center p-2'>
                          <div className="bg-center bg-SmallMap w-full h-full bg-[length:100%] py-10 lg:py-0  lg:bg-contain bg-no-repeat flex items-center justify-center">
                          <div className='p-2 bg-white w-fit rounded-xl '>
                                  <FaSchool  className='text-4xl'/>

                          </div>
                              </div>
                      <p className='font-Montserrat-Regular mt-2 text-[#0D323D]'>Nearby schools</p>
                      </div>
                      
                  </div>
              </div>
              

              <div className='mt-10'>
              <h1 className='font-Montserrat-Bold mb-5'>Features and Services:</h1>
                  
              <div className='lg:flex grid grid-cols-3 items-center lg:space-x-14 space-y-2 justify-center'>
                                  <div className='flex space-x-3 items-center'>
                                        <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                            <img alt="Dublex" src={Dublex} className="w-10 p-2"/>
                                        </div>
                                        <p className='text-[#515151] font-Montserrat-Regular'>Duplex</p>
                      </div>
                      <div className='flex space-x-3 items-center'>
                                        <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                        <RiDoorOpenLine className='text-white text-4xl'/>
                                        </div>
                                        <p className='text-[#515151] font-Montserrat-Regular'>6 bedrooms</p>
                      </div>
                      <div className='flex space-x-3 items-center'>
                                        <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                        <FaBath className='text-white text-4xl'/>
                              
                                        </div>
                                        <p className='text-[#515151] font-Montserrat-Regular'>4 bathrooms</p>
                      </div>
                      <div className='flex space-x-3 items-center'>
                                        <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                            <img alt="air" src={air} className="w-10 p-2"/>
                                        </div>
                                        <p className='text-[#515151] font-Montserrat-Regular'>forced air</p>
                      </div>
                      <div className='flex space-x-3 items-center'>
                                        <div className='p-2 bg-[#0D323D] w-fit rounded-xl'>
                                            <img alt="garage" src={garage} className="lg:w-10 p-2"/>
                                        </div>
                                        <p className='text-[#515151] font-Montserrat-Regular break-words '>2 Attached garage spaces</p>
                                   </div>
                </div>
               </div>
                  
              <div className='mt-10'>
                  <h1 className='font-Montserrat-Bold mb-5'>Take a Tour in the house</h1>
                  <div className='flex justify-center'>
              <img alt="video" src={video} className="w-[95%]  rounded-lg"/>
              </div>
              </div>

              <div className='mt-10 mb-20'>
                  <h1 className='font-Montserrat-Bold mb-5'>More Home for you:</h1>
                  <div className='lg:flex justify-around grid grid-cols-2 gap-2'>
                  <ViewCard />
              <ViewCard/>
                  
              <ViewCard/>
              <ViewCard/>
              </div>
                </div>
          </div>

          
          <Footer/>
    </div>
  )
}

export default ViewHouse