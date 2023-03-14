import React from 'react'
import { useForm } from "react-hook-form";


const Contact = () => {

    const { register, 
            handleSubmit,
            watch,
            formState: { errors } 
            } = useForm();    
      


    return(
        <div className='h-[calc(100vh-108px)] w-[90%] rounded-[50px] flex items-center justify-center text-[50px] font-bold text-black z-0 py-10'>
            
            <form onSubmit={handleSubmit( (data) => { console.log(data) }) } className='w-[90%] flex flex-col  text-[#124849] text-[1rem] md:text-[2rem] space-y-[10px]' >
                <input {...register('firstName', { required: true }) } type='text' placeholder='First Name' className='bg-white rounded-[50px] p-[20px]'/>
                <input {...register('lastName', { required: true })} type='text' placeholder='Last Name' className='bg-white rounded-[50px] p-[20px]'/>
                <input {...register('email', { required: true })} type='email' placeholder='Enter your email' className='bg-white rounded-[50px] p-[20px]'/>
                <textarea {...register('message', { required: true })} placeholder='Enter your message' className='h-[250px] bg-white rounded-[50px] p-[20px]'/>
                <button type='submit' className='h-[100px] bg-white text-[1.5rem] text-black text- rounded-[50px] hover:bg-[#64D8D9] hover:text-black'> Submit </button>
            </form>
            
        </div>
    )
}

export default Contact 