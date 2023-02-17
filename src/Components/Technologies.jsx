import React from 'react'


const Navbar = () => {
    return(
        <div>
            <div className='bg-black text-white flex flex-col items-center justify-center'>
                <h1 className='font-bold text-[3.125rem] pt-[40px]'>Technologies</h1>
                <p className='font-bold text-[16px] px-10 py-10 text-center'>I used a variety of technologies to build this projects, like HTML, CSS, 
Focusing on using best practices to maintain clean code and more </p>

                <div className=' '>
                    <div className='bg-[#EBD907] w-screen h-[390px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[108px] z-0' >
                        JavaScript
                    </div>
                    <div className='bg-[#4158AB] w-screen h-[390px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[148px] z-1' >
                        CSS
                    </div>
                    <div className='bg-[#B64F2F] w-screen h-[390px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[188px] z-2' >
                        HTML
                    </div>
                    <div className='bg-[#411102] w-screen h-[390px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[228px] z-3' >
                        Tailwind
                    </div>
                    <div className='bg-[#D8D8D8] w-screen h-[390px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[268px] z-4' >
                        Npm
                    </div>
                    <div className='bg-[#BEA2BE] w-screen h-[390px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[308px] z-5' >
                        React
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar