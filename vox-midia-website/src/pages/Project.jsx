import PrincipalTitle from "../components/PrincipalTitle";
import MainTitle from "../components/MainTitle";
import { useParams } from "react-router";
import { PROJECTS } from "../data";

// TODO -> Criar component do projeton showcase
// Criar uma forma de apresentar todas as imagens de forma dinâmica, onde seja possível renderizar as imagens com base em quantas estão vigentes

console.log()
export default function ProjectPage(props) {

  const {projectId} = useParams();

  const project =  PROJECTS.find((project) => ( project.id == projectId));

  // TODO -> Fazer a integracao com o for aqui em cima, lá em baixo n vai

  let content = ( 
    project.images.map((image) => ( 
      <div className="w-full lg:h-[40vh] m-auto bg-vox-2 border-vox-5 border-[.5px]  rounded-vox-5 bg-vox-3 p-3">
        <img className="w-full h-full object-cover rounded-[3.5px]" src={image} alt="" />
      </div>
      
    )) 
  )

  console.log("The parameter is " + projectId)
  return (
    <main>
      <section className="w-full m-auto container lg:max-w-4/5 px-4 sm:px-12 lg:px-6 py-16">
        <div className="w-full m-auto">
          <PrincipalTitle>{project.title}</PrincipalTitle>
          <div className="w-full h-auto max-h-4/5 lg:h-[499px] m-auto bg-vox-2 border-vox-5 border-[.5px] rounded-vox-5 bg-vox-3 p-3">
            <img className="w-full h-full object-cover rounded-[3.5px]" src={project.images[3]} alt="" />
          </div>
          <div className="w-full flex flex-col md:grid grid-cols-12 gap-5 my-12">
            <div className="col-span-6">
                <MainTitle>Descrição do Projeto</MainTitle>
                {/* <p>
                  Praesent sed ipsum a ex congue ultrices. Cras iaculis libero quis odio feugiat, eu efficitur urna tempus. Integer sagittis nulla felis, vel venenatis felis dignissim ac. In eget commodo risus. Sed consequat aliquam urna vel mollis. Curabitur non nunc egestas, ullamcorper libero sed, scelerisque neque. Praesent eleifend condimentum leo nec rutrum. Donec dapibus fermentum massa. Quisque iaculis suscipit diam.
                </p> */}
                <p>
                  {project.description}
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
