'use client'

import SideBar from '../components/SideBar'
import HeaderMenu from './HeaderMenu'
import Footer from './Footer'
import EmailButton from './EmailButton'
import SideBarDesktop from './SideBarDesktop'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home () {
  return (
    <main className='bg-main-black text-white'>

      {/* menu responsive */}
      <HeaderMenu />
      <SideBar />

      {/* desktop menu */}
      <SideBarDesktop />

      {/* home */}

      {/* --> me */}
      <section className='w-full px-7 py-10 lg:w-[600px] lg:m-auto lg:pt-36'>
        <motion.h1
          className='font-semibold text-4xl'
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: [1], ease: [0, 0.71, 0.2, 1.01] }}
        >
          Hola, Soy Diego <br /> Frontend Developer
        </motion.h1>

        <motion.p
          className='text-base font-medium mt-6'
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: [1.2], ease: [0, 0.71, 0.2, 1.01] }}
        >
          Desarrollador Web ubicado en Bogotá, Colombia. Mi enfoque es crear aplicaciones web intuitivas, atractivas y completamente funcionales.  <br /><br /> Echa un vistazo a mi portafolio para descubrir cómo puedo contribuir a proyectos innovadores y exitosos.
        </motion.p>
        {/* contact buttons */}
        <motion.div
          className='flex gap-2 mt-6'
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: [1.4], ease: [0, 0.71, 0.2, 1.01] }}
        >
          <Link to='/contact' className='flex place-content-center items-center bg-second-black w-[103px] h-[40px] text-sm font-medium rounded-md border border-second-gray'>
            Contacto
          </Link>
          {/* boton email  */}
          <EmailButton />
        </motion.div>
      </section>

      {/* --> projects */}
      <section className='w-full px-7 pb-10 lg:w-[600px] lg:m-auto'>
        <motion.h2
          className='text-xl font-bold mb-6'
          initial={{ y: +1000 }}
          animate={{ y: 0 }}
          transition={{ duration: [1.4], ease: [0, 0.71, 0.2, 1.01] }}
        >
          Proyectos
        </motion.h2>

        <div className='flex flex-col gap-6'>

          <motion.a
            href='https://davecoude.github.io/shopping-car/'
            target='_blank' rel='noreferrer'
            className='flex gap-4 cursor-pointer'
            initial={{ y: +1000 }}
            animate={{ y: 0 }}
            transition={{ duration: [1.6], ease: [0, 0.71, 0.2, 1.01] }}
          >
            <div className=' w-full flex gap-6'>
              <div className='w-[50%] h-32 rounded-md bg-shooping bg-cover bg-center' />
              <div className='w-[50%]'>
                <h3 className='font-medium text-sm mb-4'>Shopping cart</h3>
                <p className='text-xs text-main-gray'>Carrito de compras de productos e-commerce.</p>
              </div>

            </div>
          </motion.a>

          <motion.a
            className='flex gap-4 cursor-pointer'
            href='https://davecoude.github.io/tic-tac-toe/'
            target='_blank'
            rel='noreferrer'
            initial={{ y: +1000 }}
            animate={{ y: 0 }}
            transition={{ duration: [1.8], ease: [0, 0.71, 0.2, 1.01] }}
          >
            <div className=' w-full flex gap-6'>
              <div className='w-[50%] h-32 rounded-md bg-tictactoe bg-cover' />
              <div className='w-[50%]'>
                <h3 className='font-medium text-sm mb-4'>Tic tac toe</h3>
                <p className='text-xs text-main-gray'>Juego multijugador de tres en ralla.</p>
              </div>

            </div>
          </motion.a>

          <motion.a
            className='flex gap-4 cursor-pointer'
            href='https://davecoude.github.io/Skull-bombs/'
            target='_blank'
            rel='noreferrer'
            initial={{ y: +1000 }}
            animate={{ y: 0 }}
            transition={{ duration: [2], ease: [0, 0.71, 0.2, 1.01] }}
          >
            <div className=' w-full flex gap-6'>
              <div className='w-[50%] h-32 rounded-md bg-skullbombs bg-cover bg-center' />
              <div className='w-[50%]'>
                <h3 className='font-medium text-sm mb-4'>Skull bombs</h3>
                <p className='text-xs text-main-gray'>Juego con 3 vidas, niveles de dificultad y registro de records.</p>
              </div>

            </div>
          </motion.a>

          <div>
            <Link
              className='w-full h-[40px] text-sm font-medium flex place-content-center items-center border border-second-gray rounded-md hover:border-main-gray hover:transition-all hover:duration-600 hover: ease-in-out'
              to='/projects'
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>

      {/* --> stack */}
      <section className='px-7 pb-10 lg:w-[600px] lg:m-auto'>
        <div className='border border-second-gray rounded-md p-4'>
          <h2 className='text-xl font-bold mb-2'>Stack</h2>

          <p className='text-base font-medium text-main-gray mb-6'>
            Recursos y software que suelo usar regularmente.
          </p>

          <div className='flex flex-col gap-6 mb-8'>
            <article className='flex gap-2'>
              <div className=' bg-react w-11 h-11 rounded-md bg-cover bg-center bg-no-repeat' />
              <div>
                <h3 className='text-sm font-bold'>
                  React Js
                </h3>

                <p className='text-sm text-main-gray'>
                  Libreria interfaces de usuario.
                </p>
              </div>
            </article>

            <article className='flex gap-2'>
              <div className=' bg-node w-11 h-11 rounded-md bg-cover bg-center bg-no-repeat' />
              <div>
                <h3 className='text-sm font-bold'>
                  Node Js
                </h3>

                <p className='text-sm text-main-gray'>
                  Entorno de ejecución.
                </p>
              </div>
            </article>

            <article className='flex gap-2'>
              <div className=' bg-typescript w-11 h-11 rounded-md bg-cover bg-center bg-no-repeat' />
              <div>
                <h3 className='text-sm font-bold'>
                  Typescript
                </h3>

                <p className='text-sm text-main-gray'>
                  Tipado fuerte de JavaScript.
                </p>
              </div>
            </article>

          </div>

          <div>
            <Link to='/stack' className='flex place-content-center items-center bg-second-black w-full h-[40px] text-sm font-medium rounded-md border border-second-gray'>Todas</Link>
          </div>

        </div>
      </section>

      {/* --> footer */}
      <Footer />
    </main>

  )
}
