import React from 'react'

const page = () => {
  return (
    <div>
        <ul className='grid grid-cols-12 h-96 border rounded'>
            <li className='bg-pink-800 col-span-3 font-bold text-white text-xl p-3'>Teachers</li>
            <li className='bg-gray-400 col-span-9 font-bold text-gray-900 text-xl p-3'>Student</li>
        </ul>
    </div>
  )
}

export default page