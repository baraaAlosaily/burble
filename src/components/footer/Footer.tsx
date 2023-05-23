import React from 'react'
import Image from 'next/image'
import data from '@/content/content.json';

export default function Footer() {
  return (
    <section className='h-40 w-[100%] flex flex-col justify-center items-center gap-5 bg-black'>
        <div className='flex gap-5'>
           {
                data.footer.icons.map((item:any,index: any) => {
                    return (
                        <div key={index}>
                            <Image src={item} alt="id" width={20} height={20} />
                        </div>
                    )
                })
           }
        </div>
        <div>
            <Image src={data.footer.logo} alt="id" width={100} height={100} />
        </div>
        <div>
            <p className='underline text-white'>{data.footer.copyRight}</p>
        </div>
    </section>
  )
}
