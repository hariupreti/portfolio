import React from 'react'
import { BsFillEnvelopeAtFill } from 'react-icons/bs';
import { CiLinkedin } from 'react-icons/ci'
import { MdPictureAsPdf } from 'react-icons/md';
import { RxTwitterLogo } from 'react-icons/rx'
import { SiWhatsapp } from 'react-icons/si';
import { VscGithub } from "react-icons/vsc";

export default function Home() {
  return (
    <div className=''>
      <div className='bg-black w-80 h-80 mx-auto my-20 rounded-full'>
      </div>
      <div className='w-full text-center'>
        <h1 className='text-3xl font-mono font-semibold text-slate-300'>Hari Upreti</h1>
        <h3 className='my-2 text-lg text-white/40'>Full-stack Developer | Laravel + React</h3>
      </div>
      <div className='place-content-center grid my-12 grid-flow-col gap-6'>
        <RxTwitterLogo className='text-3xl cursor-pointer transition-all delay-100 duration-200 hover:-translate-y-2 hover:text-cyan-400'></RxTwitterLogo>
        <CiLinkedin className='text-3xl cursor-pointer transition-all delay-100 duration-200 hover:-translate-y-2 hover:text-blue-600'></CiLinkedin>
        <VscGithub className='text-3xl cursor-pointer transition-all delay-100 duration-200 hover:-translate-y-2 hover:text-neutral-600'></VscGithub>
        <BsFillEnvelopeAtFill className='text-3xl cursor-pointer transition-all delay-100 duration-200 hover:-translate-y-2 hover:text-red-400'></BsFillEnvelopeAtFill>
        <SiWhatsapp className='text-3xl cursor-pointer transition-all delay-100 duration-200 hover:-translate-y-2 hover:text-green-400'></SiWhatsapp>
        <MdPictureAsPdf className='text-3xl cursor-pointer transition-all delay-100 duration-200 hover:-translate-y-2 hover:text-violet-400'></MdPictureAsPdf>

      </div>
    </div>
  )
}
