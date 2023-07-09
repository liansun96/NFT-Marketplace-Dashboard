import React from 'react'
import { BiSolidCheckCircle } from 'react-icons/bi'

export default function QuickTransfer() {
  return (
    <div>
        <h2 className='text-white font-bold text-xl mt-10 mb-5'>Quick Transfer</h2>
        <div className='bg-[#1D1933] text-white p-5 rounded-lg'>
        <div className='flex justify-between items-center text-white'>
            <div className='flex'>
            <img src="" alt="" />
            <div>
                <h4>Jamson</h4>
                <p>@jam432</p>
            </div>
            </div>
            <BiSolidCheckCircle/>
        </div>
        <div>
            <h4>Insert Amount</h4>
            <input type="range" />

            <div className='flex items-center justify-between'>
                <p>Your balance</p>
                <p>$88,455.12</p>
            </div>
            <button>
                Transfer Now
            </button>
        </div>
        </div>
    </div>
  )
}
