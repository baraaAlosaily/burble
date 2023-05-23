"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useEffect, useState} from 'react'
import data from '@/content/content.json';
import { usePathname } from 'next/navigation';
import ImageWrapper from '@/components/image/ImageWrapper';
import Footer from '@/components/footer/Footer';



export default function page() {
  const path=usePathname();
  const filterData=data.all.filter((item:any) => item.id==path.split('/')[1]);
  
  return (
    <div className='absolute top-0 -z-10 w-[100%] font-poppins'>
        <div className=''>
        <ImageWrapper data={filterData[0]}/>
        </div>
        <div>
        <div className='bg-black px-10 py-16 flex'>
            <h1 className='text-white text-2xl'>{filterData[0].top}</h1>
        </div>
        <div className='bg-black flex justify-between overflow-hidden'>
            <p className='text-white font-bold text-2xl'>{filterData[0].line}</p>
            <p className='text-white font-bold text-2xl'>{filterData[0].line}</p>
            <p className='text-white font-bold text-2xl'>{filterData[0].line}</p>
            <p className='text-white font-bold text-2xl'>{filterData[0].line}</p>
            <p className='text-white font-bold text-2xl'>{filterData[0].line}</p>
            <p className='text-white font-bold text-2xl'>{filterData[0].line}</p>
            <p className='text-white font-bold text-2xl'>{filterData[0].line}</p>
            <p className='text-white font-bold text-2xl'>{filterData[0].line}</p>
            <p className='text-white font-bold text-2xl'>{filterData[0].line}</p>
        </div>
        <div className='md:grid md:grid-cols-8 flex flex-col bg-black gap-10 px-10 py-16'>
            <div className=' md:col-span-2 flex flex-col gap-3'>
                <p className='text-white font-bold text-2xl'>{filterData[0].liftSide.title}</p>
                <p className='text-white font-bold text-xl'>{filterData[0].liftSide.status}</p>
                <p className='text-white text-xl'>{filterData[0].liftSide.country}</p>
            </div>
            <div className=' md:col-span-6 flex flex-col gap-3'>
            <p className='text-white font-bold text-xl'>{filterData[0].rightSide.title}</p>
                <p className='text-white text-xl'>{filterData[0].rightSide.content}</p>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
