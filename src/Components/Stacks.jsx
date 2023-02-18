import React from 'react'


const Stacks = () => {
    return(
        <div>
            <div className='bg-black text-white flex flex-col items-center justify-center'>
                <h1 className='font-bold text-[3.125rem] pt-20'>Technologies</h1>
                <p className='font-bold text-[16px] px-10 p-10 pb-20 text-center'>I used the latest technologies to build these projects, 
Focusing on using best practices to maintain clean code and good performance </p>

                <div className=''>
                    <div className='bg-[#EBD907] w-screen h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[108px] z-0' >
                        JavaScript
                    </div>
                    <div className='bg-[#4158AB] w-screen h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[148px] z-1' >
                        CSS
                    </div>
                    <div className='bg-[#B64F2F] w-screen h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[188px] z-2' >
                        HTML
                    </div>
                    <div className='bg-[#411102] w-screen h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[228px] z-3' >
                        Tailwind
                    </div>
                    <div className='bg-[#D8D8D8] w-screen h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[268px] z-4' >
                        Npm
                    </div>
                    <div className='bg-[#BEA2BE] w-screen h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[308px] z-5' >
                        React
                    </div>
                    <div className='bg-[#212121] w-screen h-[470px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-white sticky top-[348] z-6' >
                    Contact
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stacks