import React from 'react'
import Contact from './Contact'

import { IoLogoJavascript } from 'react-icons/io'
import { SiTailwindcss,SiReact } from 'react-icons/si'
import { DiNpm} from 'react-icons/di'
import { FiGithub} from 'react-icons/fi'
import { FaNode} from 'react-icons/fa'



const Stacks = () => {
    return(
            <div name='stacks'className='bg-white text-black flex flex-col items-center justify-center w-[95%] md:w-[70%]'>
                <h1 className='font-bold text-[3.125rem] pt-20'>Technologies</h1>
                <p className='font-bold text-[16px] px-10 p-10 pb-20 text-center'>I used technologies like HTML, CSS, JavaScript and tools like React, npm, GitHub and more to build these projects. Focusing on using best practices to maintain clean code and good performance
                </p>

                <div className='w-[100%] space-y-2 -z-0 h-auto'>
                    <div className='bg-[#EBD907] w-100% h-[100px] rounded-[50px] flex items-center justify-center text-[3rem] font-bold text-black sticky top-[108px]' >
                        <IoLogoJavascript/>
                    </div>
                    <div className='bg-[#52B5D2] w-100% h-[100px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-white sticky top-[138px]' >
                        <SiTailwindcss/>
                    </div>
                    <div className='bg-[#222222] w-100% h-[100px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-[#82D7F7] sticky top-[170px]' >
                        <SiReact/>
                    </div>
                    <div className='bg-black w-100% h-[100px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-[#6E9E58] sticky top-[195px]' >
                        <FaNode size={70} />
                    </div>
                    <div className='bg-black w-100% h-[100px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-white sticky top-[220px]' >
                        <FiGithub/>
                    </div>
                    <div className='bg-[#BC443E] w-100% h-[100px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-white sticky top-[220px]' >
                        <DiNpm size={70}/>
                    </div>

                    <div name='contact' className='bg-[#212121] w-100% h-auto rounded-[50px] flex items-center justify-center text-[50px] font-bold text-white sticky top-[108]' >
                        <Contact/>
                    </div>
                </div>
            </div>
    )
}

export default Stacks