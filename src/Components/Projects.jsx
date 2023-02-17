import React from 'react'

const Projects = () => {
    return (  
        <div className='bg-black w-auto h-1000px' >
            <div className=' flex space-y-[14px] flex-col items-center justify-center'>
                <p className=' text-white text-bold font-Inter font-bold text-[50px]'>Projects</p>
                
                <div className='flex items-center justify-center bg-white w-[94.9333333333%] h-[380px] rounded-[50px]'>
                    <div className='grid grid-cols-3 grid-rows-3 w-[77.52809%] h-[300px]'>
                        <p className='text-[1.25rem] font-bold'>01.</p>
                        <p className='flex col-span-2 row-start-3 items-end font-bold text-[1.25rem]'>Fungi Projects</p>
                        <span className='flex col-start-2 row-start-2 items-center justify-center'>Icon</span>
                    </div>
                </div>
                <div className='flex items-center justify-center bg-custLightGreen w-[94.9333333333%] h-[380px] rounded-[50px]'>
                    <div className='grid grid-cols-3 grid-rows-3 w-[77.52809%] h-[300px]'>
                        <p className='text-[1.25rem] font-bold'>02.</p>
                        <p className='flex col-span-3 row-start-3 items-end font-bold text-[1.25rem]'>Permaculture Projects</p>
                        <span className='flex col-start-2 row-start-2 items-center justify-center'>
                            <img className='' src="/src/assets/plant.svg" alt="" />
                        </span>
                    </div>
                </div>
                <div className='flex items-center justify-center bg-custDarkGreen w-[94.9333333333%] h-[380px] rounded-[50px]'>
                    <div className='grid grid-cols-3 grid-rows-3 w-[77.52809%] h-[300px]'>
                        <p className='text-[1.25rem] font-bold text-[#98F0E2]' >03.</p>
                        <p className='flex col-span-2 row-start-3 items-end font-bold text-[1.25rem] text-[#98F0E2]'>Fungi Projects</p>
                        <span className='flex col-start-2 row-start-2 items-center justify-center width-[10px]'>
                            <img className='' src="/src/assets/fungi5.svg" alt="" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
    }
    
    export default Projects