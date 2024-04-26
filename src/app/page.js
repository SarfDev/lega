"use client"
import React, { useState } from 'react'

export default function Home() {

  const [number,setNumber] = useState(0)


  function inc(){
    if(number<5 && number>=1)
    setNumber((prev)=> prev+=1);
  }

  function dec(){
    if(number>1)
    setNumber((prev)=> prev-= 1);
  }

  return (
    <>
    <section className='flex flex-col items-center px-[4vw]'>

    <div className='py-[50px] flex items-center flex-col'>
      <h1 className='text-center'>Random Build Lol Generator</h1>
      <p className='md:w-[65ch] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt nec urna vel venenatis. Phasellus commodo efficitur ullamcorper. Proin a interdum erat, ac varius mi. Aenean tempus convallis augue iaculis volutpat. Cras efficitur, nibh quis molestie fringilla.</p>
    </div>

    <div className='flex gap-5 items-center'>

      <button className='contanerAsd' onClick={inc}>+</button>

      <div className='contanerNum'>{number}</div>

      <button className='contanerAsd' onClick={dec}>-</button>
    </div>
    
    


    </section>

    <img src='/dana.jpg' className='fixed object-cover object-center brightness-50 contrast-100 top-0 -z-10 h-full left-0 w-full'/>
    
    </>
  )
}
