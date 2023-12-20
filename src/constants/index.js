
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  omniview,
  accenture,
  sptech,
  befit,
  befitMobile,
  mebous,
  design,
  memorygame,
  phygital,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desenvolvedor",
    company_name: "Phygital Lab",
    icon: phygital,
    iconBg: "#383E56",
    date: "Novembro 2023 - Presente",
    points: [
      "Desenvolvendo sistemas, jogos 3D e experiências fisicas/digitais para usuarios e eventos",
      "Usando todo o meu conhecimento que adquiri ao longo da minha jornada",
    
  
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Fevereiro 2022 - Julho 2023",
    points: [
      "Desenvolvi sistemas internos utilizando tecnologias como React, Node.js, Express, TypeScript e Redux.",
      "Adotei metodologias ágeis, como o Scrum, para garantir entregas pontuais.",
      "Colaborei de forma estreita com equipes multifuncionais, enfatizando a comunicação eficaz e o alinhamento.",
      "Liderando revisões de código e implementando melhores práticas, mantive a qualidade e a manutenção do código em alto nível.",
    ],
  },
  {
    title: "Analista de Sistemas",
    company_name: "SPTech",
    icon: sptech,
    iconBg: "#383E56",
    date: "Agosto 2021 - Julho 2023",
    points: [
      " Conhecimentos Adquiridos na Faculdade:",
      "HTML, CSS, JavaScript, JAVA, SQL, Bootstrap, React, Kotlin, AWS e Azure",
      "Programação Orientada a Objetos (POO)",
      "Princípios SOLID",
      "Metodologia Scrum",
      "Algoritmos",
      "Banco de Dados",
      "Arquitetura Computacional",
      "Análise de Sistemas",
      "Programação Web",
      "Engenharia de Software",
      "Programação de Aplicativos (Apps)",
      "Computação e Sistemas Distribuídos em Nuvem",
    ],
  },
  {
    title: "Designer Grafico",
    company_name: "",
    icon: design,
    iconBg: "#E6DEDD",
    date: "2020 - Presente",
    points: [
      "Passei pelo curso de Design Gráfico na FMU",
      "Aprendi técnicas de manipulação de imagens", "explorando o potencial do Photoshop e do Adobe Illustrator",
      "Criação de modelos tridimensionais utilizando o Blender",
      "Desenvolvi minha paixão pelo design de interfaces", "focando em criar experiências visuais envolventes e funcionais",
      "Tornei-me um especialista em transformar ideias em protótipos visuais convincentes",
      "Dominei a arte de criar interfaces de usuário (UI) intuitivas", "tornando a experiência do usuário excepcional",
    ],
  },
];  



const projects = [
  {
    name: "Mebous Shop",
    description:
      "Loja online ficticia feita em NextJs com TailWindCSS e Stripe",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: mebous,
    source_code_link: "https://github.com/PedroTresmondi/mebous-virtual-shop",
  },
  {
    name: "Memory Game",
    description:
      "Jogo da memoria feito com JS",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: memorygame,
    source_code_link: "https://github.com/PedroTresmondi/memorygame",
  },
  {
    name: "Befit Web App",
    description:
      "Projeto feito em grupo na faculdade. Com o Befit, os usuários podem criar treinos personalizados na versão web do aplicativo.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: befit,
    source_code_link: "https://github.com/SPTechBeFit/BeFit",
  },
  {
    name: "Befit MobileApp",
    description:
      "Com o Befit, os usuários podem criar treinos personalizados na versão web do aplicativo, selecionando uma variedade de exercícios disponíveis.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "azure",
        color: "pink-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
    ],
    image: befitMobile,
    source_code_link: "https://github.com/PedroTresmondi/BefitMobileApp",
  },
  {
    name: "Omniview Monitoração",
    description:
      "Um projeto feito com o intuito de capturar dados e monitorar máquinas que são usadas como totens de auto atendimento e caixas registradores. Assim facilitando a leitura dos dados, controle das máquinas e andamento por dashboards do webApp Omniview",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: omniview,
    source_code_link: "https://github.com/PedroTresmondi/ProjetoMonitoracaoOmniview#omniview-monitora%C3%A7%C3%A3o",
  },
];

export { technologies, experiences, projects };