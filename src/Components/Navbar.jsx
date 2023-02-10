import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

{/* 
Install React Icons and import

 */}

const Navbar = () => {
    return(
        <div className = 'flex items-center justify-center w-screen fixed top-[640px]' >

            <div className='flex justify-center items-center bg-[#171717]/95 w-[355px] h-[107px] rounded-[50px] space-x-[9px] border-solid border-[4px] border-[#171717]'>

                <a href="" className='bg-[#212121] text-[#D9FEA0] flex items-center justify-center rounded-[50px] w-[197px] h-[89px]'>menu</a>

                <a href="" className='bg-[#250236] flex items-center justify-center rounded-[50px] w-[131px] h-[89px] text-[#F6D7FC]'>contact</a>
            </div>

        </div>
    )
}

export default Navbar