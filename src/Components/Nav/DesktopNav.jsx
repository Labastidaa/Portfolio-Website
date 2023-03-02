import React,{useState} from 'react'

const DesktopNav = (props) => {
    return (
        
            <ul className='hidden md:flex justify-center items-center  w-[100%]  rounded-[50px] rounded-t-none space-x-[20px] text-white'>
            <li 
                    className='
                    active:bg-white
                    md:flex items-center justify-center rounded-[50px] h-[89px]'>
                    <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>HOME</a>

            </li>

            <li className=' md:flex items-center justify-center rounded-[50px] h-[89px]'>
                <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>PROJECTS</a>
            </li>

            <li className=' md:flex items-center justify-center rounded-[50px] h-[89px]' >
                <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>TECH</a>
            </li>

            <li className=' md:flex items-center justify-center rounded-[50px] h-[89px]'>
                <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>CONTACT</a>
            </li>
          </ul>
         
    )
}

export default DesktopNav