import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='flex pl-5 bg-slate-300 justify-normal'>
        <div className='w-3/12 bg-red-300 
        h-full
        '> 
        <div className=''>
           <ul className='flex-col space-y-5 h-96 m-5 items-align-items: stretch;light-center mt-4
           
           '>
            
            <li>
                <Link href="#!">
                task
                </Link>
            </li>
            <li>
                incident
            </li>
            <li>
                incident
            </li>
            <li>
                report
            </li>
            <li>
               
            </li>
            <li>
                log out
            </li>
           </ul>
        
        </div>
        
        </div>
        <div className='w-3/4 bg-slate-500'> b</div>
    </div>
  )
}
