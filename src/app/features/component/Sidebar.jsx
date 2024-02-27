import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  const LinkStyle = "block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white hover:underline"

  return (
    <section className='bg-black h-screen pt-16'>
      <div className='pl-5 pr-5 lg:pl-16 lg:pr-16 text-center'>
        <ul className='space-y-20 inline-block'>
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