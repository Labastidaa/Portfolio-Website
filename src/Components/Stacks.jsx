import React from 'react'


const Stacks = () => {
    return(
            <div name='stacks'className='bg-white text-black flex flex-col items-center justify-center pb-40 w-[95%] md:w-[70%]'>
                <h1 className='font-bold text-[3.125rem] pt-20'>Technologies</h1>
                <p className='font-bold text-[16px] px-10 p-10 pb-20 text-center'>I used the latest technologies to build these projects, 
Focusing on using best practices to maintain clean code and good performance </p>

                <div className='w-[100%] space-y-2 -z-0'>
                    <div className='bg-[#EBD907] w-100% h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black sticky top-[108px]' >
                        JavaScript
                    </div>
                    <div className='bg-[#4158AB] w-100% h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-white sticky top-[148px]' >
                        CSS
                    </div>
                    <div className='bg-[#B64F2F] w-100% h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-white sticky top-[188px]' >
                        HTML
                    </div>
                    <div className='bg-[#52B5D2] w-100% h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-white sticky top-[228px]' >
                        Tailwind
                    </div>
                    <div className='bg-[#BC443E] w-100% h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-white sticky top-[268px]' >
                        Npm
                    </div>
                    <div className='bg-[#222222] w-100% h-[200px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-[#82D7F7] sticky top-[308px]' >
                        React
                    </div>
                    <div name='contact' className='bg-[#212121] w-100% h-[470px] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-white sticky top-[348]' >
                    Contact {/* add a contact component */}
                    </div>
                </div>
            </div>
    )
}

export default Stacks