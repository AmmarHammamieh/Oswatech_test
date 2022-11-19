import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { BsSearch } from 'react-icons/bs';
import RentSgin from "./Images/RentPage/RentSgin.svg";
import priceSgin from "./Images/RentPage/priceSgin.svg";
import soldSign from "./Images/RentPage/soldSign.svg";
import saleSign from "./Images/RentPage/saleSign.svg";
import Card from './components/RentPage/Card';
import { MapContainer  as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
function Rent() {
 
    function ShowRadioList() {
        if (document.getElementById('dropdownRadioHelper').classList.contains("hidden")) { 
            document.getElementById('dropdownRadioHelper').classList.remove("hidden");
        } else if (!document.getElementById('dropdownRadioHelper').classList.contains("hidden")) {
            document.getElementById('dropdownRadioHelper').classList.add("hidden");
            
        }
    }

    function Show2RadioList() {
        if (document.getElementById('dropdown2RadioHelper').classList.contains("hidden")) { 
            document.getElementById('dropdown2RadioHelper').classList.remove("hidden");
            document.getElementById('dropdown2RadioHelper').classList.add("flex");

        } else if (!document.getElementById('dropdown2RadioHelper').classList.contains("hidden")) {
            document.getElementById('dropdown2RadioHelper').classList.add("hidden");
            document.getElementById('dropdown2RadioHelper').classList.remove("flex");
            
        }
    }
  return (
      <div>
          <Header />
          <div className='text-center h-full'>
              <h1 className='font-Montserrat-Bold text-xl mt-10 mb-4'>Rent Your Perfect Property</h1>
              <div className='lg:w-3/4 w-fit border-2 bg-[#FAFAFA] shadow-[#000000] shadow-sm rounded-lg py-2 lg:flex grid grid-cols-2 items-center mx-auto space-x-5'>
                  <div className='flex items-center bg-white h-fit my-auto ml-5 border-2 pl-2 py-1 w-[16rem] border-[#0D323D] rounded-md'>
                      <input placeholder="Baghdad, Iraq" className='flex-grow outline-none placeholder:font-Montserrat-Bold' />
                      <BsSearch className='mx-2'/>
                  </div>
                  <div className='flex h-fit relative border-2 bg-white justify-between border-[#0D323D] rounded-md px-2'>
                      <img alt='RentSgin' src={RentSgin} className="w-4 h-4 m-auto"/>
                      <div className='flex flex-col relative'>
                            <button id="dropdownRadioHelperButton" data-dropdown-toggle="dropdownRadioHelper" onClick={()=>ShowRadioList()} class="text-[#0D323D] bg-white  focus:outline-none font-Montserrat-Medium rounded-lg text-sm px-4 py-1.5 text-center " type="button">For Rent</button>

                          <div id="dropdownRadioHelper" class="hidden top-[100%]  left-[-2rem] absolute z-40 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioHelperButton">
                                <li className="border-b-[1px]">
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 ">
                                    <div class="flex items-center h-5">
                                        <input id="helper-radio-4" name="helper-radio" type="radio" value="" class="w-3 h-3 text-blue-600 bg-gray-100 border-[#019DB3] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={()=>ShowRadioList()}/>
                                    </div>
                                    <div class="ml-2 text-sm">
                                        <label for="helper-radio-4" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1">
                                          <img alt='saleSign' src={saleSign} className=""/>
                                            <p id="helper-radio-text-4" class="text-md font-Montserrat-Medium text-[#019DB3] ml-4">For Sale</p>
                                        </label>
                                    </div>
                                    </div>
                                </li>
                                <li  className="border-b-[1px]">
                                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="helper-radio-5" name="helper-radio" type="radio" value="" class="w-3 h-3  bg-gray-100 border-[#0D323D]    checked:bg-[#0D323D]" onClick={()=>ShowRadioList()}/>
                                    </div>
                                    <div class="ml-2 text-sm ">
                                        <label for="helper-radio-5" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1">
                                        <img alt='RentSgin' src={RentSgin} className=""/>
                                            <p id="helper-radio-text-5" class="text-xs font-Montserrat-Medium text-[#0D323D] ml-4">For Rent</p>
                                        </label>
                                    </div>
                                    </div>
                                </li>
                                <li  className="border-b-[1p]">
                                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="helper-radio-6" name="helper-radio" type="radio" value="" class="w-3 h-3 text-blue-600  bg-gray-100 border-[#019DB3] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={()=>ShowRadioList()}/>
                                    </div>
                                    <div class="ml-2 text-sm ">
                                        <label for="helper-radio-6" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1 ">
                                        <img alt='soldSign' src={soldSign} className=""/>
                                            <p id="helper-radio-text-6" class="text-xs font-normal text-[#019DB3] ml-4">Sold Out</p>
                                        </label>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                      </div>
                  </div>

                  <div className='flex h-fit relative border-2 bg-white border-[#0D323D] rounded-md px-2'>
                      <img alt='priceSgin' src={priceSgin}  className="w-4 h-4 m-auto"/>
                      <button id="dropdown2RadioHelperButton" data-dropdown-toggle="dropdown2RadioHelper" onClick={()=>Show2RadioList()} class="text-[#0D323D] bg-white  focus:outline-none font-Montserrat-Medium rounded-lg text-sm pl-4 py-1.5 text-center inline-flex items-center" type="button">Price<svg class="ml-2  w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                      <div id="dropdown2RadioHelper" class="hidden top-[100%] flex-col left-[0] absolute z-40 w-[16rem] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ">
                          
                          <ul class="p-3 space-y-1 text-sm w-full text-gray-700 dark:text-gray-200" aria-labelledby="dropdown2RadioHelperButton">
                          <p className='mb-2 text-left text-[#0D323D] font-Montserrat-Regular'>Price Range</p>
                          <div className='flex justify-between w-full'>
                          <div class=" text-sm border-[1px] px-3 pt-2 pb-1 rounded-lg">
                                        <label for="title-first-price" class=" text-gray-900 dark:text-gray-300 flex items-center mb-1 ">
                                            <p id="title-first-price" class="text-md font-Montserrat-Medium text-[#0D323D]  text-center">400.00$</p>
                                        </label>
                                  </div>
                         <hr className="  bg-[#0D323D] border-[#0D323D] border-[1px] my-4 w-5 rounded-lg"/>
                         <div class=" text-sm border-[1px] px-6 pt-2 pb-1 rounded-lg">
                                        <label for="title-second-price" class=" text-gray-900 dark:text-gray-300 flex items-center mb-1">
                                            <p id="title-second-price" class="text-md font-Montserrat-Medium text-[#0D323D]  text-center">0.00$</p>
                                        </label>
                                  </div>    
                            </div>
                              <div className='flex justify-between w-full border-b-[1px]'>
                                <li className="">
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 ">
                                    <div class="flex items-center h-5">
                                        <input id="radio-1" name="first-price" type="radio" value="" class="w-3 h-3 text-blue-600 bg-gray-100 border-[#0D323D] checked:bg-[#0D323D]" />
                                    </div>
                                    <div class=" text-sm">
                                        <label for="first-price-1" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1">
                                            <p id="first-price-1" class="text-md font-Montserrat-Medium text-[#0D323D] ml-4">200$</p>
                                        </label>
                                    </div>
                                    </div>
                              </li>
                              <li className="">
                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 ">
                                    <div class="flex items-center h-5">
                                        <input id="radio-2" name="second-price" type="radio" value="" class="w-3 h-3 text-blue-600 bg-gray-100 border-[#0D323D] checked:bg-[#0D323D]" />
                                    </div>
                                    <div class=" text-sm">
                                        <label for="second-price-1" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1">
                                            <p id="second-price-1" class="text-md font-Montserrat-Medium text-[#0D323D] ml-4">200$</p>
                                        </label>
                                    </div>
                                    </div>
                                  </li>
                              </div>
                              <div className='flex justify-between w-full border-b-[1px]'>
                              
                                <li  className="">
                                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="radio-3" name="first-price" type="radio" value="" class="w-3 h-3  bg-gray-100 border-[#0D323D]    checked:bg-[#0D323D]" />
                                    </div>
                                    <div class="text-sm">
                                        <label for="first-price-2" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1">
                                            <p id="first-price-2" class="text-md font-Montserrat-Medium text-[#0D323D] ml-4">400$</p>
                                        </label>
                                    </div>
                                    </div>
                                  </li>
                                  <li  className="">
                                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="radio-4" name="second-price" type="radio" value="" class="w-3 h-3  bg-gray-100 border-[#0D323D]    checked:bg-[#0D323D]" />
                                    </div>
                                    <div class="text-sm">
                                        <label for="second-price-2" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1">
                                            <p id="second-price-2" class="text-md font-Montserrat-Medium text-[#0D323D] ml-4">400$</p>
                                        </label>
                                    </div>
                                    </div>
                                  </li>
                              </div>
                              <div className='flex justify-between w-full border-b-[1px]'>
                              
                                <li  className="">
                                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="radio-5" name="first-price" type="radio" value="" class="w-3 h-3 text-blue-600  bg-gray-100 border-[#0D323D] checked:bg-[#0D323D]" />
                                    </div>
                                    <div class=" text-sm ">
                                        <label for="first-price-3" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1 ">
                                            <p id="first-price-3" class="text-md font-Montserrat-Medium text-[#0D323D] ml-4">600$</p>
                                        </label>
                                    </div>
                                    </div>
                                  </li>
                                  <li  className="">
                                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="radio-6" name="second-price" type="radio" value="" class="w-3 h-3 text-blue-600  bg-gray-100 border-[#0D323D] checked:bg-[#0D323D]" />
                                    </div>
                                    <div class=" text-sm ">
                                        <label for="second-price-3" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1 ">
                                            <p id="second-price-3" class="text-md font-Montserrat-Medium text-[#0D323D] ml-4">600$</p>
                                        </label>
                                    </div>
                                    </div>
                                  </li>
                              </div>
                              
                              <div className='flex justify-between w-full border-b-[1px]'>
                              
                                <li  className="">
                                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="radio-7" name="first-price" type="radio" value="" class="w-3 h-3 text-blue-600  bg-gray-100 border-[#0D323D] checked:bg-[#0D323D]" />
                                    </div>
                                    <div class=" text-sm ">
                                        <label for="first-price-4" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1 ">
                                            <p id="first-price-4" class="text-md font-Montserrat-Medium text-[#0D323D] ml-4">800$</p>
                                        </label>
                                    </div>
                                    </div>
                                  </li>
                                  <li  className="">
                                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="radio-7" name="second-price" type="radio" value="" class="w-3 h-3 text-blue-600  bg-gray-100 border-[#0D323D] checked:bg-[#0D323D]" />
                                    </div>
                                    <div class=" text-sm ">
                                        <label for="second-price-4" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1 ">
                                            <p id="second-price-4" class="text-md font-Montserrat-Medium text-[#0D323D] ml-4">800$</p>
                                        </label>
                                    </div>
                                    </div>
                                  </li>
                              </div>
                              <div className='flex justify-between w-full border-b-[1px]'>
                              
                                <li  className="">
                                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5">
                                        <input id="radio-8" name="first-price" type="radio" value="" class="w-3 h-3 text-blue-600  bg-gray-100 border-[#0D323D] checked:bg-[#0D323D]" />
                                    </div>
                                    <div class=" text-sm ">
                                        <label for="first-price-5" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1 ">
                                            <p id="first-price-5" class="text-md font-Montserrat-Medium text-[#0D323D] ml-4">1200$</p>
                                        </label>
                                    </div>
                                    </div>
                                  </li>
                                  <li  className="">
                                    <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center h-5 pl-1">
                                        <input id="radio-9" name="second-price" type="radio" value="" class="w-3 h-3 text-blue-600  bg-gray-100 border-[#0D323D] checked:bg-[#0D323D]" />
                                    </div>
                                    <div class=" text-sm ">
                                        <label for="second-price-5" class="font-medium text-gray-900 dark:text-gray-300 flex items-center mb-1 ">
                                            <p id="second-price-5" class="text-md font-Montserrat-Medium text-[#0D323D] ml-3">1200$</p>
                                        </label>
                                    </div>
                                    </div>
                                  </li>
                                  </div>
                          </ul>
                          

                            </div>
                  </div>
                  
                  
                  <div className='flex h-fit relative border-2 bg-white border-[#0D323D] rounded-md px-2'>
                      <img alt='priceSgin' src={priceSgin} className="w-4 h-4 m-auto"/>
                      <button  class="text-[#0D323D] bg-white  focus:outline-none font-Montserrat-Medium rounded-lg text-sm pl-4 py-1.5 text-center inline-flex items-center" type="button">Beds<svg class="ml-2  w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  </div>

                  <div className='flex h-fit relative border-2 bg-white border-[#0D323D] rounded-md px-2'>
                      <img alt='priceSgin' src={priceSgin} className="w-4 h-4 m-auto"/>
                      <button  class="text-[#0D323D] bg-white  focus:outline-none font-Montserrat-Medium rounded-lg text-sm pl-4 py-1.5 text-center inline-flex items-center" type="button">Move Date<svg class="ml-2  w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  </div>

                  <div className='flex h-fit justify-end relative border-2 bg-white border-[#0D323D] rounded-md px-2'>
                      <button  class="text-[#0D323D] bg-white  focus:outline-none font-Montserrat-Medium rounded-lg text-sm pl-4 py-1.5 text-center inline-flex items-center" type="button">More<svg class="ml-2  w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  </div>
              </div>

              {/* Bottom */}
              <div className='w-full mb-20 flex '>
              <div className=' h-[36rem]  bg-slate-400 w-[40%]  mx-auto mt-10'>
                  <LeafletMap center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="w-full z-0" >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                           <Marker position={[51.505, -0.09]} >
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                      </LeafletMap>
                      </div>
                  <div className='lg:w-[60%]  flex flex-col p-5 rounded-xl shadow-gray-400 shadow-md mt-10'>
                      <div className='flex justify-between mb-2'>
                      <div className='flex flex-col'>
                          
                      <h1 className='font-Montserrat-Bold text-[#0D323D]'>Kanasas Rental Buildings</h1>
                      <p className='font-Montserrat-Regular text-[#0D323D] text-left'>112 Results</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                          
                          <p className='font-Montserrat-Medium text-[#0D323D]'>Sort by:</p>
                          <button class="text-[#0D323D] border-[#0D323D] border-2 bg-white  focus:outline-none font-Montserrat-Medium rounded-lg text-sm pl-4 py-1.5 text-center inline-flex items-center" type="button">Name<svg class="ml-2 mr-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                     </div>
                     </div>
                     
                      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 h-[30rem] overflow-y-scroll '>
                          <Card/>
                          <Card/>
                          <Card />
                          <Card />
                          <Card />
                          <Card />
                          <Card />  
                      </div>
                  </div>

              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Rent