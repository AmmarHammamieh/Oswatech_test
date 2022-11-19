import React from 'react'
import BannerImage from "../../Images/HomePage/BannerImage.svg";
import BigBannerImage from "../../Images/HomePage/BigBannerImage.svg";

import DownArrow from "../../Images/HomePage/DownArrow.svg";
import { BiSearch } from 'react-icons/bi';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ALBusra from "../../Images/HomePage/ALBusra.svg";
import ALBusra2 from "../../Images/HomePage/ALBusra2.svg";
import ALRayyan from "../../Images/HomePage/ALRayyan.svg";
import BigBaghdad from "../../Images/HomePage/BigBaghdad.svg";
import Karbala from "../../Images/HomePage/Karbala.svg";
import Najaf from "../../Images/HomePage/Najaf.svg";
import NewBaghdad from "../../Images/HomePage/NewBaghdad.svg";
import Nineveh from "../../Images/HomePage/Nineveh.svg";
import SmallBaghdad from "../../Images/HomePage/SmallBaghdad.svg";
import { IoIosArrowForward } from 'react-icons/io';

function Banner() {

  

  function SearchBar(){
    if (document.getElementById('SearchTitle').classList.contains("hidden")) {
      console.log("yes");
      document.getElementById('SearchTitle').classList.remove("hidden");
      document.getElementById('SearchTitle').classList.add("block","animate-fade");
    } else if (!document.getElementById('SearchTitle').classList.contains("hidden")) {
      document.getElementById('SearchTitle').classList.add("hidden");
      document.getElementById('SearchTitle').classList.remove("block");
    }

    if (document.getElementById('SearchInfo').classList.contains("font-Montserrat-regular")) {
      document.getElementById('SearchInfo').classList.remove("font-Montserrat-regular", "text-[#707070]");
      document.getElementById('SearchInfo').classList.add("font-Montserrat-Bold", "text-[#0D323D]");
      document.getElementById('SearchInfo').textContent = "Places in Baghdad";
    } else if (!document.getElementById('SearchInfo').classList.contains("font-Montserrat-regular")) {
      document.getElementById('SearchInfo').classList.add("font-Montserrat-regular", "text-[#707070]");
      document.getElementById('SearchInfo').classList.remove("font-Montserrat-Bold", "text-[#0D323D]");
      
      document.getElementById('SearchInfo').textContent = "Location..";

     }

  }
  return (
      <div className='h-full w-full'>
          <div className='relative w-full h-full'>
              <img alt="BannerImage" src={BannerImage} className="absolute hidden lg:block" />
              <img alt="BannerImage" src={BigBannerImage} className="absolute  lg:hidden" />

              <Carousel id="HomeBanner" showStatus={false} className="w-3/4  mx-auto">
              <div className='w-full h-[25rem] relative flex flex-col justify-center items-center'>
                    <p className='text-white font-Montserrat-Bold lg:text-4xl text-xl sm:text-2xl leading-relaxed w-[58%]'>The Best Way To Buy/Rent Your Next Property</p>
                    <p className='font-Montserrat-Regular text-white w-[38%] mt-5'>With the most complete source of homes for safe & real estate near you</p>
              </div>
                  <div className='w-full h-[25rem] flex-col relative flex justify-center items-center'>
                  <p className='text-white font-Montserrat-Bold lg:text-4xl text-xl sm:text-2xl leading-relaxed w-[58%]'>The Best Way To Buy/Rent Your Next Property</p>
                    <p className='font-Montserrat-Regular text-white w-[38%] mt-5'>With the most complete source of homes for safe & real estate near you</p>

                  </div>
                  <div className='w-full h-[25rem] flex-col relative flex justify-center items-center'>
                  <p className='text-white font-Montserrat-Bold lg:text-4xl text-xl sm:text-2xl leading-relaxed w-[58%]'>The Best Way To Buy/Rent Your Next Property</p>
                    <p className='font-Montserrat-Regular text-white w-[38%] mt-5'>With the most complete source of homes for safe & real estate near you</p>

              </div>
               </Carousel>
        
        <div className='relative pb-14 rounded-2xl shadow-[#0D323D] shadow-sm flex flex-col items-center justify-center bg-white lg:w-[65%] w-[90%] mx-auto'>

          <div className='flex mt-5 mb-10 '>
          <div className='relative flex justify-center w-fit text-white bg-[#0D323D] py-2 px-4 sm:px-8 font-Montserrat-Bold border-2 border-[#0D323D] rounded-tl-xl rounded-bl-xl'>
              <p className='group-hover:font-Montserrat-Bold'>For Sale</p>
              <img alt="DownArrow" src={DownArrow} className="absolute bottom-[-0.8rem] " />
            </div>
          <div className='group relative flex justify-center w-fit text-[#0D323D] py-2 px-4 sm:px-8 font-Montserrat-Regular border-2 border-l-0 border-[#0D323D] hover:bg-[#0D323D] hover:text-white hover:animate-Showupslow '>
              <p className='group-hover:font-Montserrat-Bold'>For Rent</p>
              <img alt="DownArrow" src={DownArrow} className="hidden absolute bottom-[-0.8rem] group-hover:block group-hover:animate-Showup" />
              
            </div>
          <div className='group relative flex justify-center w-fit text-[#0D323D] py-2 px-4 sm:px-8 font-Montserrat-Regular border-2 border-l-0 border-[#0D323D] rounded-tr-xl rounded-br-xl hover:bg-[#0D323D] hover:text-white hover:animate-Showupslow'>
              <p className='group-hover:font-Montserrat-Bold'>For Invest</p>
              <img alt="DownArrow" src={DownArrow} className="hidden absolute bottom-[-0.8rem] group-hover:block  group-hover:animate-Showup" />
              
            </div>
          </div>
          
          <div className=' w-3/4 h-fit bg-white flex space-x-2 items-center py-2 px-4  mb-[-2rem] z-10 relative m-auto border-2 rounded-xl cursor-pointer' onClick={()=>SearchBar()}>
            <BiSearch className='text-3xl mr-1' />
            <p id='SearchInfo' className='font-Montserrat-regular text-sm text-[#707070]'>Location..</p>
            <p id='SearchTitle' className='font-Montserrat-regular text-sm absolute top-[-0.8rem] bg-white left-[2.9rem] text-[#707070] px-1 hidden'>Location..</p>
          </div>

          <div className='mt-20 flex justify-around flex-col sm:flex-row  w-3/4'>
            <select className='rounded-lg py-3  sm:w-[27%] mb-3 sm:mb-0 w-1/2 text-center text-[#0D323D] border-[#0D323D]'>
              <option hidden selected className='font-Montserrat-Medium '>PROPERTY TYPE</option>
            </select>
            <select className='rounded-lg py-3  sm:w-[25%] mb-3 sm:mb-0 w-1/2 text-center text-[#0D323D] border-[#0D323D]'>
              <option hidden selected className='font-Montserrat-Medium '>PRICE RANGE</option>
            </select>
            <select className='rounded-lg py-3  sm:w-[20%] mb-3 sm:mb-0 w-1/2 text-center text-[#0D323D] border-[#0D323D]'>
              <option hidden selected className='font-Montserrat-Medium '>ROOMS</option>
            </select>
            <select className='rounded-lg py-3  sm:w-[20%] mb-3 sm:mb-0 w-1/2 text-center text-[#0D323D] border-[#0D323D]'>
              <option hidden selected className='font-Montserrat-Medium '>BEDS</option>
            </select>
          </div>

          <button className='absolute bottom-[-1.3rem] w-1/2 bg-[#0D323D] text-white py-2 font-Montserrat-Bold rounded-xl mt-20'>Result</button>
        </div>
        {/* bottom */}
        <div className=''>
        <div className='mt-20 flex flex-col items-center justify-center m-auto w-3/4'>
            <h1 className='text-[#0D323D] font-Montserrat-Bold text-2xl sm:text-3xl'>Explore homes in IRAQ</h1>
            <hr className="  bg-[#0D323D] border-[#0D323D] border-[2px] my-4 w-[23rem] rounded-lg"/>
            <p className='text-[#0D323D] w-[25rem] md:w-[37rem] text-center'>Take a deep dive and browse homes for sale, original neighbourhood photos, resident reviews and local insights to find what is right for you</p>
          </div>
          
          <div className='h-full w-full flex mb-20 mt-5 scrollbar-hide overflow-x-scroll whitespace-nowrap flex-nowrap'>
            <div className='relative w-fit flex-[0_0_40%] lg:flex-[0_0_18%]'>
              <img alt="BigBaghdad" src={BigBaghdad} />
          <button className='opacity-80 font-semibold text-right text-xs absolute bottom-5 left-3 text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center px-2  py-2'>View Home <IoIosArrowForward className='ml-5'/> </button>
          <p className='text-white text-lg  text-center absolute top-3 font-Montserrat-Medium left-2'>Baghdad</p>

            </div>
            <div className='flex flex-col justify-between ml-2 flex-[0_0_40%] lg:flex-[0_0_18%]'>
            <div className='relative w-fit'>
              <img alt="ALBusra" src={ALBusra} />
              <button className='opacity-80 font-semibold text-right text-xs absolute bottom-5 left-3 text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center px-2  py-2'>View Home <IoIosArrowForward className='ml-5'/> </button>
          <p className='text-white text-lg  text-center absolute top-3 font-Montserrat-Medium left-3'>AL-Busra</p>
              </div>
              <div className='relative w-fit'>
              <img alt="ALRayyan" src={ALRayyan} />
              <button className='opacity-80 font-semibold text-right text-xs absolute bottom-5 left-3 text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center px-2  py-2'>View Home <IoIosArrowForward className='ml-5'/> </button>
          <p className='text-white text-lg  text-center absolute top-3 font-Montserrat-Medium left-3'>AL-Rayyan</p>
            </div>
            </div>
            <div className='flex flex-col justify-between mx-2 flex-[0_0_40%] lg:flex-[0_0_18%]'>
            <div className='relative w-fit'>
              <img alt="NewBaghdad" src={NewBaghdad} />
              <button className='opacity-80 font-semibold text-right text-xs absolute bottom-5 left-3 text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center px-2  py-2'>View Home <IoIosArrowForward className='ml-5'/> </button>
          <p className='text-white text-lg  text-center absolute top-3 font-Montserrat-Medium left-3'>New Baghdad</p>
              </div>
              <div className='relative w-fit'>
              <img alt="Karbala" src={Karbala} />
              <button className='opacity-80 font-semibold text-right text-xs absolute bottom-5 left-3 text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center px-2  py-2'>View Home <IoIosArrowForward className='ml-5'/> </button>
          <p className='text-white text-lg  text-center absolute top-3 font-Montserrat-Medium left-3'>Karbala</p>
            </div>
            </div>
            <div className='relative w-fit flex-[0_0_40%]  lg:flex-[0_0_18%]'>
              <img alt="Nineveh" src={Nineveh} />
              <button className='opacity-80 font-semibold text-right text-xs absolute bottom-5 left-3 text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center px-2  py-2'>View Home <IoIosArrowForward className='ml-5'/> </button>
          <p className='text-white text-lg  text-center absolute top-3 font-Montserrat-Medium left-3'>Nineveh</p>
            </div>
            <div className='flex flex-col justify-between mx-2 flex-[0_0_40%] lg:flex-[0_0_18%]'>
            <div className='relative w-fit'>
              <img alt="Najaf" src={Najaf} />
              <button className='opacity-80 font-semibold text-right text-xs absolute bottom-5 left-3 text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center px-2  py-2'>View Home <IoIosArrowForward className='ml-5'/> </button>
          <p className='text-white text-lg  text-center absolute top-3 font-Montserrat-Medium left-3'>Najaf</p>
              </div>
              <div className='relative w-fit'>
              <img alt="ALBusra2" src={ALBusra2} />
              <button className='opacity-80 font-semibold text-right text-xs absolute bottom-5 left-3 text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center px-2  py-2'>View Home <IoIosArrowForward className='ml-5'/> </button>
          <p className='text-white text-lg  text-center absolute top-3 font-Montserrat-Medium left-3'>AL-Busra</p>
            </div>
            </div>
            <div className='flex flex-col justify-between flex-[0_0_40%] lg:flex-[0_0_18%]'>
            <div className='relative w-fit'>
              <img alt="SmallBaghdad" src={SmallBaghdad} />
              <button className='opacity-80 font-semibold text-right text-xs absolute bottom-5 left-3 text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center px-2  py-2'>View Home <IoIosArrowForward className='ml-5'/> </button>
          <p className='text-white text-lg  text-center absolute top-3 font-Montserrat-Medium left-3'>Baghdad</p>
              </div>
              <div className='relative w-fit'>
              <img alt="SmallBaghdad" src={SmallBaghdad} />
              <button className='opacity-80 font-semibold text-right text-xs absolute bottom-5 left-3 text-[#515151] font-Montserrat-Medium bg-white rounded-lg shadow-md flex justify-between items-center px-2  py-2'>View Home <IoIosArrowForward className='ml-5'/> </button>
          <p className='text-white text-lg  text-center absolute top-3 font-Montserrat-Medium left-3'>Baghdad</p>
            </div>
            </div>
         

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner