
"use client";
import ImageWrapper from '@/components/image/ImageWrapper';
import data from '../content/content.json';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className=' absolute top-0 -z-10 w-[100%]'>
      {
        data.all.map((item:any,index: any) => {
          return (
            <ImageWrapper key={index} data={item}/>
          )
        })
      }
      <Footer/>
    </main>
  )
}
