import { useEffect } from 'react'
import Footer from './Footer'
import HeaderMenu from './HeaderMenu'
import SideBar from './SideBar'
import EmailButton from './EmailButton'
import { useLocation } from 'react-router-dom'
import SideBarDesktop from './SideBarDesktop'
import { motion } from 'framer-motion'

export default function Contact () {
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

        <section className=' w-full px-7 pt-10 lg:w-[600px] lg:m-auto lg:pt-36'>
          <motion.h2
            className='font-semibold text-4xl' initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: [1], ease: [0, 0.71, 0.2, 1.01] }}
          >Contactame
          </motion.h2>
          <motion.p
            className='text-base font-medium mt-6 mb-10' initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: [1.2], ease: [0, 0.71, 0.2, 1.01] }}
          >Siempre busco colaborar en proyectos interesantes con gente estupenda. ¿Necesitas una mano? Yo tengo dos!
          </motion.p>

          {/* contact buttons */}
          <motion.div
            className='flex gap-2 mt-6 mb-10' initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: [1.4], ease: [0, 0.71, 0.2, 1.01] }}
          >
            <a href='https://wa.me/573042378720' target='_blank' rel='noreferrer' className='flex place-content-center items-center bg-second-black w-[103px] h-[40px] text-sm rounded-md border border-second-gray'>
              Whatsapp
            </a>
            {/* boton email  */}
            <EmailButton />
          </motion.div>

          <motion.h3
            className='text-xl font-bold mb-6' initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: [1.6], ease: [0, 0.71, 0.2, 1.01] }}
          >Envia un mensaje
          </motion.h3>

          <form
            action='https://formspree.io/f/mrgnewyn'
            method='POST'
            className='grid grid-rows-6 grid-cols-2 gap-4 mb-10 lg: pb-20'
          >

            <motion.input
              className='h-[40px] px-4 col-start-1 col-end-2 row-start-1 row-end-2  bg-second-black text-main-gray text-sm rounded-md'
              id='name'
              type='text'
              placeholder='Nombre'
              name='name' required
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: [1.2], ease: [0, 0.71, 0.2, 1.01] }}
            />

            <motion.input
              className='h-[40px] px-4 col-start-2 col-end-3 row-start-1 row-end-2 bg-second-black text-main-gray text-sm rounded-md'
              id='email'
              type='email'
              placeholder='Email'
              name='email' required
              initial={{ x: +1000 }}
              animate={{ x: 0 }}
              transition={{ duration: [1.2], ease: [0, 0.71, 0.2, 1.01] }}
            />

            <motion.textarea
              className=' resize-none h-full px-4 py-4 col-start-1 col-end-3 row-start-2 row-end-6 bg-second-black text-main-gray text-sm rounded-md'
              name='message'
              id='message'
              placeholder='Mensaje'
              maxLength={500} required
              initial={{ y: +1000 }}
              animate={{ y: 0 }}
              transition={{ duration: [1.2], ease: [0, 0.71, 0.2, 1.01] }}
            />

            <motion.input
              className='bg-second-black font-medium w-full h-[40px] col-start-1 col-end-3 text-sm rounded-md cursor-pointer' type='submit' value='Enviar' initial={{ y: +1000 }}
              animate={{ y: 0 }}
              transition={{ duration: [1.5], ease: [0, 0.71, 0.2, 1.01] }}
            />
          </form>

          <Footer />
        </section>

      </div>

    </>
  )
}
