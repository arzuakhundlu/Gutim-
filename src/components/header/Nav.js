import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav >
        <ul className='flex gap-[27px] items-center max-[1180px]:flex-col max-[1180px]:items-start'>
            <li>
                <NavLink className='text-[16px] text-white font-[600] border-b border-b-[var(--gray)] border-b-[2px] hover:border-b-[var(--orange)]' to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className='text-[16px] text-white font-[600] border-b border-b-[var(--gray)] border-b-[2px] hover:border-b-[var(--orange)]' to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink className='text-[16px] text-white font-[600] border-b border-b-[var(--gray)] border-b-[2px] hover:border-b-[var(--orange)]' to='/classes'>Classes</NavLink>
            </li>
            <li>
                <NavLink className='text-[16px] text-white font-[600] border-b border-b-[var(--gray)] border-b-[2px] hover:border-b-[var(--orange)]' to='/blog'>Blog</NavLink>
            </li>
            <li>
                <NavLink className='text-[16px] text-white font-[600] border-b border-b-[var(--gray)] border-b-[2px] hover:border-b-[var(--orange)]' to='/gallery'>Gallery</NavLink>
            </li>
            <li>
                <NavLink  className='text-[16px] text-white font-[600] border-b border-b-[var(--gray)] border-b-[2px] hover:border-b-[var(--orange)]' to='/contact'>Contacts</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
