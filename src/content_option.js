import Tempo from "./assets/images/tempo.jpg";

const logotext = "GABRIEL";
const meta = {
  title: "Gabriel Gomes .dev",
  description: "Sou Gabriel Gomes _ Desenvolvedor Front End",
};

const introdata = {
  title: "Eu sou, Gabriel Gomes",
  animated: {
    first: "Desenvolvo soluções criativas para desafios complexos",
    second:
      "Crio websites incríveis, com design moderno e funcionalidades inovadoras",
    third:
      "Desenvolvo aplicativos móveis com tecnologia de ponta, pensando sempre na melhor experiência do usuário",
  },
  description:
    "Sou um desenvolvedor apaixonado por programação, especializado em criar websites e aplicativos móveis com design moderno e tecnologia de ponta.",
  // your_img_url: "/src/assets/images/foto_perfil.jpg",
};

const dataabout = {
  title: "Resumo",
  aboutme1:
    "Minha trajetória no universo da tecnologia foi inspirada por uma curiosidade incessante e uma paixão pela inovação. Como desenvolvedor fullstack, mergulho profundamente nos mundos do frontend e backend, aproveitando meu domínio das tecnologias HTML, CSS, Javascript, PHP e Node JS, além de trabalhar com bases de dados como MySQL, Postgres e MongoDB.",
  aboutme2:
    "Minha jornada também me levou a explorar diversas bibliotecas de UI, capacitando-me a criar experiências de usuário excepcionais e intuitivas. Essas ferramentas, aliadas ao meu compromisso contínuo de me manter atualizado com as últimas tendências tecnológicas, permitem-me enfrentar desafios complexos com confiança e entusiasmo.",
  aboutme3:
    "Estou motivado a continuar minha busca por conhecimento e a aplicar minhas habilidades de maneira inovadora, contribuindo para a vanguarda da tecnologia e criando soluções que impulsionam o progresso. Estou animado para continuar minha jornada e moldar o futuro por meio da tecnologia.",
};
const worktimeline = [
  {
    jobtitle: "WPS Brasil",
    where: "Porto Alegre",
    date: "2015 - 2021",
  },
  {
    jobtitle: "UPDATE Soluções em Tecnologia",
    where: "Porto Alegre",
    date: "2021 - atualmente",
  },
  {
    jobtitle: "Nexus Tech Solutions",
    where: "Porto Alegre",
    date: "2023 - atualmente",
  },
];

const skills = [
  {
    name: "React",
    value: 90,
  },
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "PHP",
    value: 80,
  },
  {
    name: "SQL",
    value: 70,
  },
  {
    name: "Python",
    value: 50,
  },
];

const services = [
  {
    title: "Desenvolvimento WEB",
    description:
      "Desenvolvimento de soluções utilizando o que há de mais moderno em tecnologia, com foco na experiência do usuário.",
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Desenvolvimento de aplicativos mobile para Android e IOS, utilizando as melhores tecnologias do mercado.",
  },
  {
    title: "Integração com APIs",
    description:
      "Integração de sistemas com APIs, utilizando as melhores práticas e padrões disponíveis.",
  },
];

const dataportfolio = [
  {
    img: `${Tempo}`,
    description:
      "Sistema de consulta de previsão do tempo, utilizando a API da HGBrasil.",
    link: "https://gabriellgomess.com/tempo/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "gabriel.gomes@outlook.com",
  YOUR_FONE: "+55 51 99707 3430",
  description: "Entre em contato comigo para conversarmos sobre seu projeto.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_o2wtk2a",
  YOUR_TEMPLATE_ID: "template_w2x7n5l",
  YOUR_USER_ID: "TMNLCu_E7C7UNYD1p",
};

const socialprofils = {
  github: "https://github.com/gabriellgomess",
  instagram: "https://www.instagram.com/gabriellgomess12/",
  linkedin: "https://www.linkedin.com/in/gabriel-lacerda-gomes/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
