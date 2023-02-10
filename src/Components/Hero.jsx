import React from 'react'

{/* Hero component */}

const Hero = () => {
    return(
        <div className = 'bg-[#000] flex flex-col justify-center items-center h-screen ' >
            <div>Icons</div>
            <div className='text-white text-5xl p-10 space-y-[16px] '>
                <h1 className='text-[#00B412] font-Inter font-extrabold text-[50px]'>GeoLavz</h1>
                <h1 className='font-Inter font-black text-[50px]'>$| Dev init</h1>
                <p className='text-[#00B412] text-base font-Inter font-bold text-[50px]' >
                    I am Geovanni a developer
                    Life long learner, driven by curiosity
                </p>
                {/* <a href="" className='text-xl text-[#00B412]'>More about me</a> */}
            </div>
        </div>
    )
}

export default Hero