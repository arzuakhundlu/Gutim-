import React from 'react'
import logo from "../../image/logo.png.webp"
import Nav from './Nav'
import SignUpBtn from './SignUpBtn'
import MenuSvg from '../svg/MenuSvg'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='h-[84px] w-full bg-[var(--gray)] fixed z-50'>
        <div className='container flex justify-between items-center h-full'>
            <Link to={'/'}>
              <img className='w-[100px] h-[24px]' src={logo} alt="Logo" />
            </Link>
            <input type='checkbox' className='hidden' id='htmlNavId' />
            <div className='flex items-center gap-[54px]  nav_cont'>
               <Nav />
               <SignUpBtn />
            </div>
            <label htmlFor='htmlNavId' className='hidden max-[1180px]:inline-block'>
              <MenuSvg />
            </label>
        </div>
    </header>
  )
}

export default Header
