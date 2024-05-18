"use client"
import React, { useState } from 'react';
import { Card } from '../../components/Card';
import data from '../data/campioni.json';
import info from '../data/ItemsLol.json'
import { random } from '../../components/random';

export default function Home() {
  const [number, setNumber] = useState(1);
  const [champrRand, setChamprRand] = useState([]);
  const [normalBuild, setNormalBuild] = useState(false)
  const [itRand, setItRand] = useState([]);
  let i = 0

  function inc() {
    if (number < 5 && number >= 1) {
      setNumber((prev) => prev + 1);
    }
  }

  function dec() {
    if (number > 1) {
      setNumber((prev) => prev - 1);
    }
  }

  function genera() {
    const tempChamprRand = [];
    const tempiTEMSrand = []

    for (let i = 0; i < number; i++) {
      tempChamprRand.push(data[random(0, 166)]);
    }

    for (let i = 0; i < number*6; i++) {
      tempiTEMSrand.push(info[random(0, 105)]);
    }
    setChamprRand(tempChamprRand);
    setItRand(tempiTEMSrand)
  }

  return (
    <>
      <section className='flex flex-col items-center px-[4vw]'>
        <div className='py-[50px] flex items-center flex-col'>
          <h1 className='text-center'>Random Build Lol Generator</h1>
          <p className='md:w-[65ch] text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt nec urna vel venenatis. Phasellus commodo efficitur
            ullamcorper. Proin a interdum erat, ac varius mi. Aenean tempus
            convallis augue iaculis volutpat. Cras efficitur, nibh quis
            molestie fringilla.
          </p>
        </div>

        <div className='flex gap-5 items-center pb-8'>
          <button className='contanerAsd' onClick={inc}>
            +
          </button>
          <div className='contanerNum'>{number}</div>
          <button className='contanerAsd' onClick={dec}>
            -
          </button>
        </div>

        <div className="form-control ">
          <label className="label cursor-pointer gap-3">
            <span className={`label-text text-[#C89B3C] ${normalBuild? "text-white":"text-gray-600"}`}>Normal build</span> 
            <input type="checkbox" className={`toggle toggle-info borderSpy`} onChange={()=> setNormalBuild((prev) => !prev)}/>
          </label>
        </div>

        <div>
          <button
            className='bottone md:px-28 w-full px-24'
            onClick={genera}
          >
            Genera
          </button>
        </div>

        <div className='flex md:flex-row flex-col md:items-start items-center justify-start w-full gap-3 pt-7'>
          {champrRand.map((champion, index) => {
            
            if(index > 0){
              i +=6;
            }
            
            return (<Card
              key={index}
              nome={champion.nomeCampione}
              imgCampione={champion.url_campione}
              item1={itRand[i].img_url}
              item2={itRand[i+1].img_url}
              item3={itRand[i+2].img_url}
              item4={itRand[i+3].img_url}
              item5={itRand[i+4].img_url}
              item6={itRand[i+5].img_url}
            />)
          })}
        </div>
      </section>

      <img src='/dana.jpg' className='fixed object-cover object-center brightness-50 contrast-100 top-0 -z-10 h-full left-0 w-full' />
    </>
  );
}
