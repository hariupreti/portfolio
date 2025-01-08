import React from 'react'

export default function Header() {
  return (
    <div className='w-full bg-black/5 border-b border-gray-900'>
      <div className='grid container mx-auto grid-flow-col px-16 py-8'>
        <div>
            <h1 className='font-serif text-3xl font-bold p-2 rounded-lg bg-black w-fit'>H.U.</h1>
        </div>
        <div className='my-auto'>
            <ul className='grid grid-flow-col gap-6'>
                <li className='float-start text-md bg-transparent cursor-pointer hover:text-indigo-400 text-center rounded-full '>Home</li>
                <li className='float-start text-md bg-transparent cursor-pointer hover:text-indigo-400 text-center rounded-full '>About</li>
                <li className='float-start text-md bg-transparent cursor-pointer hover:text-indigo-400 text-center rounded-full '>Timeline</li>
                <li className='float-start text-md bg-transparent cursor-pointer hover:text-indigo-400 text-center rounded-full '>Blogs</li>
                <li className='float-start text-md bg-transparent cursor-pointer hover:text-indigo-400 text-center rounded-full '>Contact</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
