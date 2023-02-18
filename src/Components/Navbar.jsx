import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

{/* 
Install React Icons and import

 */}

const Navbar = () => {

    {/* 
    Create reusable styles for similar items
    Use Rem for responsive sizing boxes and also responsive text.

    Abstract CSS Classes for reusable UI Components like projects
    and add custom values as classNames
    */}

    return(
        <div className = 'flex items-center justify-center w-screen fixed top-[0px]' >

            <ul className='flex justify-center items-center bg-[#171717]/95 w-screen h-[107px] rounded-[50px] rounded-t-none space-x-[9px]'>

                    <li className='bg-[#212121] rounded-[50px] w-[55.2%] h-[89px] border-4 border-[#171717] flex sm:hidden items-center justify-center'>
                        <a href="" className=' flex  leading-[1.188rem] text-[#D9FEA0] font-Inter font-base font-bold'>
                            MENU
                            <AiOutlineMenu className='ml-[10px] md:hidden'/>
                        </a>
                    </li>

                    <li className='hidden sm:flex bg-[#250236] flex items-center justify-center rounded-[50px] w-[36.8%] h-[89px] text-[#F6D7FC] border-4 border-[#171717]'>
                        <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>HOME</a>
                    </li>

                    <li className='hidden sm:flex bg-[#250236] items-center justify-center rounded-[50px] w-[36.8%] h-[89px] text-[#F6D7FC] border-4 border-[#171717]'>
                        <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>PROJECTS</a>
                    </li>

                    <li className='hidden sm:flex bg-[#250236] items-center justify-center rounded-[50px] w-[36.8%] h-[89px] text-[#F6D7FC] border-4 border-[#171717]'>
                        <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>TECH</a>
                    </li>

                    <li className='bg-[#250236] flex items-center justify-center rounded-[50px] w-[36.8%] h-[89px] text-[#F6D7FC] border-4 border-[#171717]'>
                        <a href="" className=' leading-[1.188rem] font-Inter text-[1rem] font-bold '>CONTACT</a>
                    </li>
                
            </ul>

        </div>
    )
}

export default Navbar