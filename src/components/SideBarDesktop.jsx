'use client'

import { FaRegCompass, FaRegUser } from 'react-icons/fa'
import { AiOutlineThunderbolt, AiOutlineLinkedin } from 'react-icons/ai'
import { FiTool } from 'react-icons/fi'
import { MdMailOutline } from 'react-icons/md'
import { VscGithub } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

export default function SideBarDesktop () {
  return (
    <div>
      {/* side menu */}
      <nav className='fixed z-10 px-7 py-10 w-[280px] h-screen bg-second-black shadow-2xl hidden sm:block md:hidden lg:block'>

        {/* header user profile */}
        <div className='flex gap-4 mb-10'>
          <img src='/profile.jpg' alt='Foto de perfil' className=' w-11 h-11 rounded-full' />
          <div>
            <h3 className='font-bold text-sm text-white'>Diego Vanegas</h3>
            <p className='text-sm text-main-gray'>Frontend Developer</p>
          </div>
        </div>

        {/* navegation options */}
        <Link to='/' className='text-main-gray font-bold w-full h-[36px] px-[8px] py-[12px] flex gap-2 items-center text-sm focus:bg-second-gray focus:rounded-md focus:border focus:border-main-gray hover:text-white focus:text-white'>
          <FaRegCompass size={18} />
          Home
        </Link>

        <Link to='/projects' className='text-main-gray font-bold w-full h-[36px] px-[8px] py-[12px] flex gap-2 items-center text-sm focus:bg-second-gray focus:rounded-md focus:border focus:border-main-gray hover:text-white focus:text-white'>
          <AiOutlineThunderbolt size={18} />
          Proyectos
        </Link>

        <Link to='/stack' className='text-main-gray font-bold w-full h-[36px] px-[8px] py-[12px] flex gap-2 items-center text-sm focus:bg-second-gray focus:rounded-md focus:border focus:border-main-gray hover:text-white focus:text-white'>
          <FiTool size={18} />
          Stack
        </Link>

        <Link to='/about' className='text-main-gray font-bold w-full h-[36px] px-[8px] py-[12px] flex gap-2 items-center text-sm focus:bg-second-gray focus:rounded-md focus:border focus:border-main-gray hover:text-white focus:text-white'>
          <FaRegUser size={17} />
          Sobre mi
        </Link>

        <Link to='/contact' className='text-main-gray font-bold w-full h-[36px] px-[8px] py-[12px] flex gap-2 items-center text-sm focus:bg-second-gray focus:rounded-md focus:border focus:border-main-gray hover:text-white focus:text-white'>
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

      </nav>
    </div>
  )
}
