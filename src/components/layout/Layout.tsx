import React from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}
