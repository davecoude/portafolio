import { useState } from 'react'
import { FaRegCopy } from 'react-icons/fa6'
import { FaRegCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function EmailButton () {
  const [isModalVisible, setModalVisibility] = useState(false)

  const handleCopyToClipboard = async () => {
    const email = 'diegoalejandrovanegas97@gmail.com'

    try {
      await navigator.clipboard.writeText(email)
      setModalVisibility(true)

      setTimeout(() => {
        setModalVisibility(false)
      }, 3000)

      console.log('Correo copiado exitosamente', email)
    } catch (error) {
      console.error('Error al copiar el correo', error)
    }
  }

  return (
    <>
      <motion.button onClick={handleCopyToClipboard} className='bg-main-black w-[103px] h-[40px] text-sm font-medium rounded-md border border-second-gray flex gap-2 items-center px-4 hover:border-main-gray hover:transition-all hover:duration-600 hover: ease-in-out'>
        {
          isModalVisible
            ? <FaRegCheckCircle className='text-green' size={16} />
            : <FaRegCopy />
        }
        Gmail
      </motion.button>
    </>
  )
}
