
import React from 'react'

export default function ImageWrapper(data: any) {
  return (
    <div className='relative md:h-[62.5rem] h-[41.5rem]'>
        <a href={`/${data.data.id}`}>
        <div>
            <img src={data.data.image} alt="id" className=' object-cover md:h-[62.5rem] h-[41.5rem] w-[100%]' />
        </div>
        <div className='absolute top-0 w-[100%] h-[100%] flex justify-center items-center'>
           <img src={data.data.logo} alt="id" className=' lg:w-[29.5rem] lg:h-[16rem] w-[16] h-[8rem]' />
        </div>
        </a>
    </div>
  )
}
