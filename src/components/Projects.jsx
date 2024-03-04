import HeaderMenu from './HeaderMenu'
import SideBar from './SideBar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SideBarDesktop from './SideBarDesktop'
import { motion } from 'framer-motion'

export default function Projects () {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      {/* menu responsive */}

      <HeaderMenu />

      <SideBar />

      {/* desktop menu */}
      <SideBarDesktop />

      <div className='bg-main-black text-white'>

        <section className='w-full px-7 pt-10 lg:w-[600px] lg:m-auto lg:pt-36'>
          <motion.h2
            className='font-semibold text-4xl'
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: [1], ease: [0, 0.71, 0.2, 1.01] }}
          >
            Proyectos
          </motion.h2>
          <motion.p
            className='text-base font-medium mt-6 mb-24'
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: [1.2], ease: [0, 0.71, 0.2, 1.01] }}
          >
            A través de mis proyectos personales como desarrollador frontend, he adquirido una sólida experiencia en la creación de interfaces de usuario atractivas y funcionales. <br /><br />

            Mi portafolio refleja mi habilidad para trabajar con tecnologías clave del mercado. Cada proyecto representa un desafío único que he superado, demostrando mi capacidad para traducir diseños creativos en código funcional y optimizado. Mi enfoque en la innovación, la usabilidad y la resolución de problemas técnicos me ha permitido consolidar experiencia y habilidades en el campo del desarrollo web.
          </motion.p>

          <div className='mb-10'>
            <motion.a
              className='block mb-8'
              href='https://davecoude.github.io/shopping-car/'
              target='_blank'
              rel='noopener noreferrer'
              initial={{ y: +1000 }}
              animate={{ y: 0 }}
              transition={{ duration: [1.4], ease: [0, 0.71, 0.2, 1.01] }}
            >
              <div className='flex gap-4'>
                <div className='bg-shooping w-[50%] h-[150px] bg-cover bg-center rounded-md' />
                <div className=' w-[50%]'>
                  <h3 className='text-base font-medium mb-2'>Shopping cart</h3>
                  <p className='text-sm text-main-gray mb-6'>Carrito de compras de productos e-commerce.</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              className='block mb-8'
              href='https://davecoude.github.io/tic-tac-toe/'
              target='_blank'
              rel='noopener noreferrer'
              initial={{ y: +1000 }}
              animate={{ y: 0 }}
              transition={{ duration: [1.6], ease: [0, 0.71, 0.2, 1.01] }}
            >
              <div className='flex gap-4'>
                <div className='bg-tictactoe w-[50%] h-[150px] bg-cover bg-center rounded-md' />
                <div className=' w-[50%]'>
                  <h3 className='text-base font-medium mb-2'>Tic tac toe</h3>
                  <p className='text-sm text-main-gray mb-6'>Juego multijugador de tres en ralla.</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              className='block mb-8'
              href='https://davecoude.github.io/Skull-bombs/'
              target='_blank'
              rel='noopener noreferrer'
              initial={{ y: +1000 }}
              animate={{ y: 0 }}
              transition={{ duration: [1.8], ease: [0, 0.71, 0.2, 1.01] }}
            >
              <div className='flex gap-4'>
                <div className='bg-skullbombs w-[50%] h-[150px] bg-cover bg-center rounded-md' />
                <div className=' w-[50%]'>
                  <h3 className='text-base font-medium mb-2'>Skull bombs</h3>
                  <p className='text-sm text-main-gray mb-6'>Juego con 3 vidas, niveles de dificultad y registro de records.</p>
                </div>
              </div>
            </motion.a>

            <a
              className='block mb-8'
              href='https://github.com/davecoude/movies-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex gap-4'>
                <div className='bg-movies w-[50%] h-[150px] bg-cover bg-center rounded-md' />
                <div className=' w-[50%]'>
                  <h3 className='text-base font-medium mb-2'>Movies App</h3>
                  <p className='text-sm text-main-gray mb-6'>Buscador de peliculas y series favoritas del septimo arte.</p>
                </div>
              </div>
            </a>

            <a
              className='block mb-8'
              href='https://davecoude.github.io/batatabit-criptoproject/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex gap-4'>
                <div className='bg-batabit w-[50%] h-[150px] bg-cover bg-center rounded-md' />
                <div className=' w-[50%]'>
                  <h3 className='text-base font-medium mb-2'>Batabit</h3>
                  <p className='text-sm text-main-gray mb-6'>Información del mundo cripto.</p>
                </div>
              </div>
            </a>
          </div>

          <Footer />
        </section>

      </div>

    </>
  )
}
