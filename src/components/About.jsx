import { Link } from 'react-router-dom'
import Footer from './Footer'
import HeaderMenu from './HeaderMenu'
import SideBar from './SideBar'
import EmailButton from './emailButton'
import SideBarDesktop from './SideBarDesktop'
import { motion } from 'framer-motion'

export default function About () {
  return (
    <>
      {/* menu responsive */}

      <HeaderMenu />

      <SideBar />

      {/* desktop menu */}

      <SideBarDesktop />

      <div className='bg-main-black text-white'>

        <section className=' w-full px-7 pt-10 lg:w-[800px] lg:m-auto lg:pt-36'>

          <motion.h2
            className='font-semibold text-4xl' initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: [1], ease: [0, 0.71, 0.2, 1.01] }}
          >Sobre Diego
          </motion.h2>

          <motion.p
            className='text-base font-medium mt-6' initial={{ x: -1000 }}
            animate={{ x: 0 }} transition={{ duration: [1.2], ease: [0, 0.71, 0.2, 1.01] }}
          >
            Frontend Developer que ama el diseño minimalista, el código bien estructurado y una buena pizza.
          </motion.p>

          <motion.div className='bg-about bg-cover bg-center w-full h-[220px] rounded-lg mt-8' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }} />

          <motion.p className='text-sm text-main-gray mt-8' initial={{ y: +1000 }} animate={{ y: 0 }} transition={{ duration: 1.4, ease: [0, 0.71, 0.2, 1.01] }}>
            Con una sólida trayectoria en proyectos personales, me especializo en el desarrollo de interfaces de usuario para aplicaciones web. Reconozco mi destreza en concebir experiencias intuitivas, atractivas y funcionales que se alinean con los objetivos comerciales. Como profesional del desarrollo, cuento con habilidades de diseño que facilitan la creación ágil de prototipos y su evaluación correspondiente. Mi compromiso se focaliza en la excelencia del diseño centrado en el usuario, siempre en búsqueda de oportunidades para optimizar y perfeccionar la experiencia del usuario. Mantengo estándares rigurosos de calidad y eficiencia como elemento fundamental de mi enfoque profesional.

            <br />
            <br />

            Actualmente, estoy homologando la carrera de Ingeniería de Software en la Corporación Universitaria Iberoamericana. Me mantengo en constante aprendizaje acerca de las nuevas tecnologías y tendencias en el campo. Asisto a diversas conferencias y encuentros relacionados con las Tecnologías de la Información (TI). Cuando no estoy programando, disfruto de la lectura, la actividad física, el baloncesto y explorar restaurantes. Abogo firmemente por el equilibrio entre el trabajo y la vida, asegurándome de tomar descansos para recargar energías.

            <br />
            <br />

            Soy un jugador de equipo y disfruto colaborar con desarrolladores, gerentes de producto y otros diseñadores. Me considero un solucionador de problemas y disfruto enfrentar desafíos de desarrollo complejos, donde se encuentra el crecimiento y el progreso. Mi objetivo último es crear productos que hagan la vida de las personas más fácil y placentera. Este texto fue escrito en colaboración con la inteligencia artificial (IA).
          </motion.p>

          {/* contact buttons */}
          <div className='flex gap-2 mt-6 mb-10'>
            <Link to='/contact' className='flex place-content-center items-center bg-second-black w-[103px] h-[40px] text-sm font-medium rounded-md border border-second-gray'>
              Contacto
            </Link>

            {/* boton email  */}
            <EmailButton />
          </div>

          <Footer />
        </section>

      </div>

    </>
  )
}
