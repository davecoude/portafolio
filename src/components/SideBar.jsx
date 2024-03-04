'use client'

import { IoMdClose } from 'react-icons/io'
import { FaRegCompass, FaRegUser } from 'react-icons/fa'
import { AiOutlineThunderbolt, AiOutlineLinkedin } from 'react-icons/ai'
import { FiTool } from 'react-icons/fi'
import { MdMailOutline } from 'react-icons/md'
import { VscGithub } from 'react-icons/vsc'

import { useUINavBar } from '../hooks/ui-navbar'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function SideBar () {
  const isSideMenuOpen = useUINavBar(state => state.isSideMenuOpen)
  const closeMenu = useUINavBar(state => state.closeSideMenu)

  return (
    <div>

      {/* background black */}
      {
        isSideMenuOpen && (
          <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-main-black opacity-30 lg:hidden' />
        )
      }

      {/* blur */}
      {
        isSideMenuOpen && (
          <div onClick={closeMenu} className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm lg:hidden' />
        )
      }

      {/* side menu */}
      <motion.nav
        className={
        clsx(
          'fixed px-7 py-5 left-0 top-0 w-[280px] h-screen bg-second-black z-20 shadow-2xl transform transition-all duration-300 lg:hidden',
          {
            'translate-x-[-100%]': !isSideMenuOpen
          }
        )
        }
      >

        <IoMdClose
          size={26}
          className='absolute top-5 right-5 cursor-pointer text-main-gray'
          onClick={closeMenu}
        />

        {/* header user profile */}
        <div className='flex gap-4 mb-10'>
          <img src='/profile.jpg' alt='Foto de perfil' className=' w-11 h-11 rounded-full' />
          <div>
            <h3 className='font-bold text-sm text-white'>Diego Vanegas</h3>
            <p className='text-sm text-main-gray'>Frontend Developer</p>
          </div>
        </div>

        {/* navegation options */}
        <Link to='/' onClick={closeMenu} className='text-main-gray font-bold w-full h-[36px] px-[8px] py-[12px] flex gap-2 items-center text-sm focus:bg-second-gray focus:rounded-md focus:border focus:border-main-gray hover:text-white focus:text-white'>
          <FaRegCompass size={18} />
          Home
        </Link>

        <Link to='/projects' onClick={closeMenu} className='text-main-gray font-bold w-full h-[36px] px-[8px] py-[12px] flex gap-2 items-center text-sm focus:bg-second-gray focus:rounded-md focus:border focus:border-main-gray hover:text-white focus:text-white'>
          <AiOutlineThunderbolt size={18} />
          Proyectos
        </Link>

        <Link to='/stack' onClick={closeMenu} className='text-main-gray font-bold w-full h-[36px] px-[8px] py-[12px] flex gap-2 items-center text-sm focus:bg-second-gray focus:rounded-md focus:border focus:border-main-gray hover:text-white focus:text-white'>
          <FiTool size={18} />
          Stack
        </Link>

        <Link to='/about' onClick={closeMenu} className='text-main-gray font-bold w-full h-[36px] px-[8px] py-[12px] flex gap-2 items-center text-sm focus:bg-second-gray focus:rounded-md focus:border focus:border-main-gray hover:text-white focus:text-white'>
          <FaRegUser size={17} />
          Sobre mi
        </Link>

        <Link to='/contact' onClick={closeMenu} className='text-main-gray font-bold w-full h-[36px] px-[8px] py-[12px] flex gap-2 items-center text-sm focus:bg-second-gray focus:rounded-md focus:border focus:border-main-gray hover:text-white focus:text-white'>
          <MdMailOutline size={18} />
          Contacto
        </Link>

        {/* social media */}
        <div className='mt-10'>
          <h3 className='text-sm text-main-gray font-light'>Redes sociales</h3>
          <ul className='px-[12px] py-[8px]'>
            <li className='w-full h-[36px]'>
              <a className='text-main-gray text-sm font-bold flex gap-2 items-center hover:text-white' href='https://www.linkedin.com/in/davanegas/' target='_blank' rel='noopener noreferrer'>
                <AiOutlineLinkedin size={18} />
                LinkedIn
              </a>
            </li>
            <li className='w-full h-[36px]'>
              <a className='text-main-gray text-sm font-bold flex gap-2 items-center hover:text-white' href='https://github.com/davecoude' target='_blank' rel='noopener noreferrer'>
                <VscGithub size={18} />
                Github
              </a>
            </li>
          </ul>
        </div>

      </motion.nav>
    </div>
  )
}
