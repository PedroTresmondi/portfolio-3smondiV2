import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full red-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Sobre mim</p>
        <h2 className={styles.sectionHeadText}>Visão geral.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Com ampla experiência em desenvolvimento de sistemas internos usando React, Node.js, Express, TypeScript e Redux, meu trabalho é conduzido pela agilidade. <br />
        Comunico com APIs usando Bootstrap e Axios, aplico Scrum para entregas eficientes e lidero revisões de código. <br />

        Também atuo como QA, focando em UI e frontend. E com proficiência em soluções na nuvem AWS e banco de dados Azure, estou preparado para enfrentar desafios. <br />
        Além disso, como designer gráfico freelancer com habilidades em Adobe Illustrator e Photoshop, integro design e tecnologia de maneira única.
        <br />Formado em Análise de Sistemas de Computação na São Paulo Tech School, minha paixão é aplicar essas habilidades em projetos inovadores.
      </motion.p>


    </>
  );
};

export default SectionWrapper(About, "about");