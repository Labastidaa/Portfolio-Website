import React from 'react'
import { FiGithub} from 'react-icons/fi'


import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavbarItems = () => {
    return(

        <ul className='fixed top-[108px] flex flex-col bg-black/95 w-[99%] h-[calc(100%-207px)] rounded-[50px] text-[1.5rem] justify-center items-center '>
            {/* flex flex-col justify-center items-center  w-screen  rounded-[50px] rounded-t-none space-x-[9px] text-white */}
            
            <li className='flex items-center justify-center h-[20%] w-[95%] border-b border-white/20'>
                <Link to='home' smooth={true} offset={0} duration={500} className='leading-[1.188rem] font-Inter font-bold hover:text-[#64D8D9]'>Home</Link>
            </li>

            <li className='flex items-center justify-center h-[20%] w-[95%] border-b border-white/20'>
                <Link to='projects' smooth={true} offset={-100} duration={500} className=' leading-[1.188rem] font-Inter font-bold hover:text-[#64D8D9]'>Projects</Link>
            </li>

            <li className='flex items-center justify-center h-[20%] w-[95%] border-b border-white/20' >
                <Link to='stacks' smooth={true} offset={0} duration={500} className=' leading-[1.188rem] font-Inter font-bold hover:text-[#64D8D9]'>Tech</Link>
            </li>

            <li className='flex items-center justify-center h-[20%] w-[95%] '>
                <Link to='contact' smooth={true} offset={0} duration={500} className='relative flex justify-center items-center font-Inter font-bold hover:text-[#64D8D9]'>Contact</Link>
            </li>

            <div className='w-[95%] h-[20%] flex'>
                <a href='www.google.com' className='flex justify-center items-center w-[50%] h-[90%] rounded-[40px] bg-white text-black hover:text-[#2D64BC] '>
                    <p className='font-Inter font-bold'>LinkedIn</p>
                </a>

                <a className='flex justify-center items-center ml-3 w-[50%] h-[90%] rounded-[40px] bg-white text-black hover:text-[#64D8D9] '>
                    <FiGithub  size={40} />
                </a>

            </div>


          </ul>
    )
} 
export default NavbarItems