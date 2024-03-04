import { useEffect } from 'react'
import Footer from './Footer'
import HeaderMenu from './HeaderMenu'
import SideBar from './SideBar'
import { useLocation } from 'react-router-dom'
import SideBarDesktop from './SideBarDesktop'
import { motion } from 'framer-motion'

export default function Stack () {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
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

          >Stack
          </motion.h2>
          <motion.p
            className='text-base font-medium mt-6 mb-10'
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: [1.2], ease: [0, 0.71, 0.2, 1.01] }}
          >
            Herramientas que uso y amaria que hecharas un vistazo
          </motion.p>

          <article>
            <motion.h3
              className='text-base font-light text-main-gray mb-6' initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: [1.3], ease: [0, 0.71, 0.2, 1.01] }}
            >
              Programación
            </motion.h3>

            <motion.div className='flex gap-4' initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: [1], ease: [0, 0.71, 0.2, 1.01] }}>
              <div className='bg-next w-11 h-11 rounded-md bg-cover bg-center bg-no-repeat' />
              <div>
                <h3 className='text-sm font-medium mb-2'>Next Js</h3>
                <p className='text-xs text-main-gray mb-6'>En progreso...</p>
              </div>
            </motion.div>

            <motion.div className='flex gap-4' initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: [1.2], ease: [0, 0.71, 0.2, 1.01] }}>
              <div className='bg-react w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>React Js</h3>
                <p className='text-xs text-main-gray mb-6'>Libreria de interfaces.</p>
              </div>
            </motion.div>

            <motion.div className='flex gap-4' initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: [1.4], ease: [0, 0.71, 0.2, 1.01] }}>
              <div className='bg-node w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>Node Js</h3>
                <p className='text-xs text-main-gray mb-6'>Entorno de ejecución.</p>
              </div>
            </motion.div>

            <motion.div className='flex gap-4' initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: [1.6], ease: [0, 0.71, 0.2, 1.01] }}>
              <div className='bg-js w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>JavaScript</h3>
                <p className='text-xs text-main-gray mb-6'>Lenguaje de Programación.</p>
              </div>
            </motion.div>

            <motion.div className='flex gap-4' initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: [1.8], ease: [0, 0.71, 0.2, 1.01] }}>
              <div className='bg-typescript w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>Typescript</h3>
                <p className='text-xs text-main-gray mb-6'>Tipado de lenguaje JavaScript.</p>
              </div>
            </motion.div>

            <motion.div className='flex gap-4' initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: [2], ease: [0, 0.71, 0.2, 1.01] }}>
              <div className='bg-github w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>Github</h3>
                <p className='text-xs text-main-gray mb-6'>Control de versiones.</p>
              </div>
            </motion.div>

            {/* divider */}
            <motion.div className='w-full border border-second-gray mb-6' initial={{ x: -1000, scale: 0 }} animate={{ x: 0, scale: 1 }} transition={{ duration: [4], ease: [0, 0.71, 0.2, 1.01] }} />

            <motion.div className='flex gap-4' initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: [2.2], ease: [0, 0.71, 0.2, 1.01] }}>
              <div className='bg-tailwind w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>Tailwind</h3>
                <p className='text-xs text-main-gray mb-6'>Framework CSS.</p>
              </div>
            </motion.div>

            <motion.div className='flex gap-4' initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: [2.4], ease: [0, 0.71, 0.2, 1.01] }}>
              <div className='bg-bootstrap w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>Bootstrap</h3>
                <p className='text-xs text-main-gray mb-6'>Framework CSS.</p>
              </div>
            </motion.div>

            <motion.div className='flex gap-4' initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: [2.6], ease: [0, 0.71, 0.2, 1.01] }}>
              <div className='bg-sass w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>SASS</h3>
                <p className='text-xs text-main-gray mb-6'>Preprocesador CSS.</p>
              </div>
            </motion.div>
          </article>

          <article className='mt-10 mb-10'>
            <h3 className='text-base font-light text-main-gray mb-6'>Software</h3>

            <div className='flex gap-4'>
              <div className='bg-vscode w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>VSCode</h3>
                <p className='text-xs text-main-gray mb-6'>Editor de codigo.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='bg-hyper w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>Hyper</h3>
                <p className='text-xs text-main-gray mb-6'>Terminal.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='bg-figma w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>Figma</h3>
                <p className='text-xs text-main-gray mb-6'>Diseño de interfaz.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='bg-notion w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>Notion</h3>
                <p className='text-xs text-main-gray mb-6'>Productividad.</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <div className='bg-adobe w-11 h-11 rounded-md bg-cover bg-center' />
              <div>
                <h3 className='text-sm font-medium mb-2'>Suit Adobe</h3>
                <p className='text-xs text-main-gray mb-6'>Diseño.</p>
              </div>
            </div>
          </article>
          <Footer />
        </section>
      </div>

    </>
  )
}
