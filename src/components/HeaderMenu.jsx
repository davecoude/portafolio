import { IoMenuSharp } from 'react-icons/io5'
import { useUINavBar } from '../hooks/ui-navbar'

export default function HeaderMenu () {
  const openSideMenu = useUINavBar(state => state.openSideMenu)

  return (
    <div className='bg-second-black w-full px-7 py-6 flex justify-between border-b-[1px] border-second-gray shadow-md lg:hidden'>
      <div className='flex gap-2'>
        <img src='/profile.jpg' alt='Foto de perfil' className=' w-11 h-11 rounded-full' />
        <div className=''>
          <h3 className='font-bold text-base text-white'>Diego Vanegas</h3>
          <p className='text-base text-main-gray'>Frontend Developer</p>
        </div>

      </div>

      <button
        className='w-10 h-10 bg-second-gray text-main-gray rounded-md flex items-center place-content-center px-2' onClick={openSideMenu}
      >
        <IoMenuSharp
          size={26}
        />
      </button>
      {/* <h1>Hola, soy Diego. <br /> Frontend Developer</h1> */}
    </div>
  )
}
