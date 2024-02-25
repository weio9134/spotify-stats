import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  const LinkStyle = "block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white hover:underline"

  return (
    <section className='bg-black pt-10 h-screen'>
      <div className='pl-3 lg:pl-20 pr-10'>
        <ul className='flex flex-col space-y-20'>
          <li className={LinkStyle}> Top Tracks </li>
          <li className={LinkStyle}> Top Artists </li>
          <li className={LinkStyle}> Top Genres </li>
          <li className={LinkStyle}> Recently Played </li>
          <li className={LinkStyle}> Current Wrapped</li>
        </ul>
      </div>
    </section>
  )
}

export default Sidebar