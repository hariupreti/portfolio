import Header from '@/app/components/Header'
import React from 'react'
import Home from './pages/Home'

export default function layout() {
  return (
    <div className='min-h-screen text-white'>
      <div>
      <Header></Header>
      </div>
      <Home></Home>
    </div>
  )
}
