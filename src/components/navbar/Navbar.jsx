"use client"
import Image from 'next/image'
import React,{useState} from 'react'
import data from '../../content/content.json'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [hidden, setHidden] = useState(true)
  return (
    <section className='my-7 mx-14 flex justify-between font-poppins'>
        <div>
            <Image src={'/burble/logo.svg'} alt='logo' width={20} height={20} className='md:w-32 md:h-36 w-16 h-18' />
        </div>
        <div className='md:flex gap-12 hidden'>
            {
                data.navbar.map((item, index) => (
                   <div key={index}>
                        <a className=' text-white  font-bold' href={`${item.link}`}>{item.name}</a> 
                   </div>
                ))
            }
        </div>
        <div onClick={()=>setHidden(false)} className='md:hidden flex cursor-pointer'>
            <MenuIcon style={{fontSize:"3rem",color:"white"}} />
        </div>
        <div onClick={()=>setHidden(true)} style={{backgroundColor:"gray" ,opacity:'0.8'}} className={`w-[100%] absolute top-0 left-0 h-screen z-10 ${hidden?'hidden':''} flex flex-col justify-center items-center gap-20 md:hidden`}>
                {
                    data.navbar.map((item, index) => (
                    <div className='z-20 h-5' key={index}>
                        <a className=' font-bold text-white text-2xl' href={`${item.link}`}>{item.name}</a>
                    </div>
                    ))
                }
        </div>
    </section>
    )
}
