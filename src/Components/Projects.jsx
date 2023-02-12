import React from 'react'

const Projects = () => {
    return (  
        <div className='bg-black w-auto h-1000px' >
            <div className=' flex space-y-[14px] flex-col items-center justify-center'>
                <p className=' text-white text-bold font-Inter font-bold text-[50px]'>Projects</p>
                <div className='flex items-center justify-center bg-white w-[94.9333333333%] h-[380px] rounded-[50px]'>
                    <div className='grid grid-cols-3 grid-rows-3 bg-[#000]/50 w-[77.52809%] h-[300px]'>
                        <p className=''>01.</p>
                        <p className='col-start-1 row-start-3'>Fungi Projects</p>
                        <span className='col-start-2 row-start-2 '>Icon</span>
                    </div>
                </div>
                <div className='bg-custLightGreen w-[94.9333333333%] h-[380px] rounded-[50px]'></div>
                <div className='bg-custDarkGreen w-[94.9333333333%] h-[380px] rounded-[50px]'></div>
            </div>
        </div>
    )
    }
    
    export default Projects