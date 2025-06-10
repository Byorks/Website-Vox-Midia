import PrincipalTitle from "../components/PrincipalTitle";
import MainTitle from "../components/MainTitle";
import SecondaryTitle from "../components/SecondaryTitle.jsx";
import { useParams } from "react-router";
import { PROJECTS } from "../data.js";

// TODO -> Criar component do projeton showcase
// Criar uma forma de apresentar todas as imagens de forma dinâmica, onde seja possível renderizar as imagens com base em quantas estão vigentes
export default function ProjectPage(props) {

  const {projectId} = useParams();

  const project =  PROJECTS.find((project) => ( project.id == projectId));

  // TODO -> Fazer a integracao com o for aqui em cima, lá em baixo n vai
 // Tenho que criar uma estrutura para inserir o alt dinamicamente 

  let content = ( 
    project.images.map((image, i) => (
      i > 0 ? 
      <div className="w-full aspect-7/4 m-auto border-vox-5 rounded-[3.5px]">
        <img className={`w-full h-full object-contain md:object-cover  rounded-[3.5px]  `} src={image} alt="" />
      </div> 
      : undefined
      
    )) 
  );

  let projectDescription = (
    <div>
      <p className="pb-3"><em>{project.description.resume}</em></p>
      <SecondaryTitle spacing="pb-3" textAlign="text-left">Desafio</SecondaryTitle>
      <p className="pb-6">{project.description.challenge}</p>
      <SecondaryTitle spacing="pb-3" textAlign="text-left">Solução</SecondaryTitle>
      <p className="pb-6">{project.description.solution}</p>
    </div>
  );

  console.log("The parameter is " + projectId)
  return (
    <main>
      <section className="w-full m-auto container lg:max-w-4/5 px-4 sm:px-12 lg:px-6 py-16">
        <div className="w-full m-auto">
          <PrincipalTitle>{project.title}</PrincipalTitle>
          <div className="w-full h-auto min-h-64 aspect-square md:aspect-7/4 m-auto bg-vox-2 border-vox-5 border-[.5px] rounded-vox-5 bg-vox-3 p-3">
            <img className="w-full h-full object-cover rounded-[3.5px]" src={project.logo} alt="" />
          </div>
          <div className="w-full flex flex-col md:grid grid-cols-12 gap-5 my-12">
            <div className="col-span-6">
                <MainTitle>Descrição do Projeto</MainTitle>
                {/* <p>
                  Praesent sed ipsum a ex congue ultrices. Cras iaculis libero quis odio feugiat, eu efficitur urna tempus. Integer sagittis nulla felis, vel venenatis felis dignissim ac. In eget commodo risus. Sed consequat aliquam urna vel mollis. Curabitur non nunc egestas, ullamcorper libero sed, scelerisque neque. Praesent eleifend condimentum leo nec rutrum. Donec dapibus fermentum massa. Quisque iaculis suscipit diam.
                </p> */}
                <p>
                  {projectDescription}
                </p>
            </div>
            <div className="col-span-6 w-full h-full  bg-vox-2 border-vox-5 border-[.5px]  rounded-vox-5 bg-vox-3 p-3">
                <img className="aspect-square w-full h-full max-h-[500px] object-cover rounded-[3.5px]" src={project.images[0]}  alt="" />
            </div>
          </div>
          {/* TODO tirar uma imagem */}
          <div className="grid gap-6">
            {content}
          </div>
          
        </div>
      </section>
    </main>
  );
}
