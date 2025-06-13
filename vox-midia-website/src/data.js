import path from "path";
import ohMyPetImg from "./assets/cases/oh-my-pet/logo-omp.jpg";
import ohMyPetImg1 from "./assets/cases/oh-my-pet/layout-project-1.jpg";
import ohMyPetImg2 from "./assets/cases/oh-my-pet/layout-project-2.jpg";
import ohMyPetImg3 from "./assets/cases/oh-my-pet/layout-project-3.jpg";
import ohMyPetImg4 from "./assets/cases/oh-my-pet/layout-project-4.jpg";
import ohMyPetImg5 from "./assets/cases/oh-my-pet/layout-project-5.jpg";

// /// Project Data

// Criar mocked database onde guardamos os projetos e depois apenas filtramos pela listagem de qual tipo de projeto queremos mostrar

export const PROJECTS = [
  {
    id: "0",
    type: "branding",
    title: "Oh My Pet!",
    description:{
      resume: "Criando uma identidade que abraça pets e tutores com empatia, alegria e qualidade",
      challenge: "A Oh My Pet! é uma empresa dedicada a transformar a vida de pets e seus tutores, combinando cuidados de alta qualidade com uma forte missão social de resgate e adoção de animais. O desafio era desenvolver uma identidade de marca que transmitisse empatia, alegria e profissionalismo, refletindo tanto o lado emocional da causa animal quanto a excelência dos seus serviços.",
      solution: "Criamos um branding completo que equilibra calor humano e profissionalismo, posicionando a Oh My Pet! como uma marca que cuida tanto dos animais quanto da experiência dos seus tutores.",
      results: ""
    },
    logo: ohMyPetImg,
    images: [ohMyPetImg1, ohMyPetImg2, ohMyPetImg3, ohMyPetImg4, ohMyPetImg5],
  },
  {
    id: "2",
    type: "web",
    title: "Projeto 1 Web",
    description:
      "lorel",
    logo: "",
    images: ["", "", "", ""],
  },
  {
    id: "3",
    type: "web",
    title: "Projeto 2 Web",
    description:
      "lorel",
    logo: "",
    images: ["", "", "", ""],
  },
  {
    id: "4",
    type: "web",
    title: "Projeto 3 Web",
    description:
      "lorel",
    logo: "",
    images: ["", "", "", ""],
  },
  {
    id: "5",
    type: "social-media",
    title: "Projeto 1 Social Media",
    description:
      "lorel",
    logo: "",
    images: ["", "", "", ""],
  },
  {
    id: "6",
    type: "social-media",
    title: "Projeto 2 Social Media",
    description:
      "lorel",
    logo: "",
    images: ["", "", "", ""],
  },
  {
    id: "7",
    type: "branding",
    title: "Projeto 1 Branding",
    description:
      "lorel",
    logo: "",
    images: ["", "", "", ""],
  },
  {
    id: "8",
    type: "branding",
    title: "Projeto 2 Branding",
    description:
      "lorel",
    logo: "",
    images: ["", "", "", ""],
  },
  {
    id: "9",
    type: "branding",
    title: "Projeto 2 Branding",
    description:
      "lorel",
    logo: "",
    images: ["", "", "", ""],
  },
  {
    id: "10",
    type: "branding",
    title: "Oh My Pet!",
    description:{
      resume: "Criando uma identidade que abraça pets e tutores com empatia, alegria e qualidade",
      challenge: "A Oh My Pet! é uma empresa dedicada a transformar a vida de pets e seus tutores, combinando cuidados de alta qualidade com uma forte missão social de resgate e adoção de animais. O desafio era desenvolver uma identidade de marca que transmitisse empatia, alegria e profissionalismo, refletindo tanto o lado emocional da causa animal quanto a excelência dos seus serviços.",
      solution: "Criamos um branding completo que equilibra calor humano e profissionalismo, posicionando a Oh My Pet! como uma marca que cuida tanto dos animais quanto da experiência dos seus tutores.",
      results: ""
    },
    logo: ohMyPetImg,
    images: [ohMyPetImg1, ohMyPetImg2, ohMyPetImg3, ohMyPetImg4, ohMyPetImg5],
  },
];
