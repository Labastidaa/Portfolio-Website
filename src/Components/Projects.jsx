import React from 'react'
import { HiCode } from "react-icons/hi";

const Projects = () => {
    return (  
        <div name='projects' className='flex flex-col items-center justify-center w-[100%] h-auto'>
            <p className='flex justify-center text-black text-bold font-Inter font-bold text-[50px] pb-[100px]'>Projects</p>

            <div className=' 
            md:flex-row md:space-x-[2%] md:space-y-[0px]
            w-[95%] flex space-y-[14px] flex-col '>
                
                <div className='flex items-center justify-center bg-[#212121] w-[100%] h-[380px] rounded-[50px] text-white'>
                    <div className='grid grid-cols-3 grid-rows-3 w-[77.52809%] h-[300px]'>
                        <p className='text-[1.25rem] font-bold'>01.</p>
                        <p className='flex col-span-2 row-start-3 items-end font-bold text-[1.25rem] '>Fungi Projects</p>
                        <a href="" className=' flex col-start-2 row-start-2 items-center justify-center'>
                            <HiCode color='#fff' size={60}/>
                        </a>
                    </div>
                </div>

                <div className='flex items-center justify-center bg-custLightGreen w-[100%] h-[380px] rounded-[50px]'>
                    <div className='grid grid-cols-3 grid-rows-3 w-[77.52809%] h-[300px]'>
                        <p className='text-[1.25rem] font-bold'>02.</p>
                        <p className='flex col-span-3 row-start-3 items-end font-bold text-[1.25rem]'>Permaculture Projects</p>
                        <a href="" className=' flex col-start-2 row-start-2 items-center justify-center'>
                            <HiCode size={60}/>
                        </a>

                    </div>
                </div>

                <div className='flex items-center justify-center bg-custDarkGreen w-[100%] h-[380px] rounded-[50px]'>
                    <div className='grid grid-cols-3 grid-rows-3 w-[77.52809%] h-[300px]'>
                        <p className='text-[1.25rem] font-bold text-[#98F0E2]' >03.</p>
                        <p className='flex col-span-2 row-start-3 items-end font-bold text-[1.25rem] text-[#98F0E2]'>Fungi Projects</p>
                        <a href="" className='flex col-start-2 row-start-2 items-center justify-center'>
                            <HiCode  className='fill-[#98F0E2]' size={60}/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
    }
    
    export default Projects