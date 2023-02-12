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

            <div className='flex justify-center items-center bg-[#171717]/95 w-screen h-[107px] rounded-[50px] rounded-t-none space-x-[9px] '>

                <a href="" className='bg-[#212121] leading-[1.188rem] text-[#D9FEA0] font-Inter font-base font-bold flex items-center justify-center rounded-[50px] w-[55.2%] h-[89px] border-4 border-[#171717]'>MENU</a>

                <a href="" className='bg-[#250236] leading-[1.188rem] font-Inter text-[1rem] font-bold  flex items-center justify-center rounded-[50px] w-[36.8%] h-[89px] text-[#F6D7FC] border-4 border-[#171717]'>CONTACT</a>
            </div>

        </div>
    )
}

export default Navbar