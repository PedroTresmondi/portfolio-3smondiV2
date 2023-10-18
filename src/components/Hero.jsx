import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'



const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#972828]' />
          <div className='w-1 sm:h-80 h-40 red-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, sou <span className='text-[#ba4d41]'>Pedro Tresmondi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desenvolvedor, Analista e  <br className="sm:block hidden" /> entusiasta de UI/UX
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="relative">
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center flex-row z-10">
          <a href="#about">
            <motion.div
              animate={{
                scale: [1, 1.9, 1]
              }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-3 h-3 rounded-full mb-1 opacity-70"
              style={{
                backgroundColor: "#c9c5c5",
                boxShadow: "0 0 16px rgb(255, 255, 255)" // Adicione um box-shadow para o brilho
              }}
            />
          </a>
          <motion.div
            animate={{
              scale: [1, 1.01, 1]
            }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="flex justify-center m-5"
            style={{
              opacity: 0.9
            }}
          >
            Clique no objeto para habilitar ou desabilitar o zoom
          </motion.div>
        </div>
      </div>
    </section >
  )
}

export default Hero