import React from 'react'

const NavbarItems = () => {
    return(
        <ul className='flex flex-col justify-center items-center  w-screen  rounded-[50px] rounded-t-none space-x-[9px] text-white'>
            
            <li className='flex items-center justify-center rounded-[50px] w-[36.8%] h-[89px]'>
                    <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>HOME</a>
            </li>

            <li className='flex items-center justify-center rounded-[50px] w-[36.8%] h-[89px]'>
                <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>PROJECTS</a>
            </li>

            <li className='flex items-center justify-center rounded-[50px] w-[36.8%] h-[89px]' >
                <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>TECH</a>
            </li>

            <li className='flex items-center justify-center rounded-[50px] w-[36.8%] h-[89px]'>
                <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>CONTACT</a>
            </li>

          </ul>
    )
} 

export default NavbarItems