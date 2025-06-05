import PrincipalTitle from "../components/PrincipalTitle";
import MainTitle from "../components/MainTitle";
import { useParams } from "react-router";

// TODO -> Criar component do projeton showcase
// Criar uma forma de apresentar todas as imagens de forma dinâmica, onde seja possível renderizar as imagens com base em quantas estão vigentes

console.log()
export default function ProjectPage(props) {

  const {projectId} = useParams();

  console.log("The parameter is " + projectId)
  return (
    <main>
      <section className="w-full m-auto container lg:max-w-4/5 px-4 sm:px-12 lg:px-6 py-16">
        <div className="w-full m-auto">
          {/* <PrincipalTitle>{title}</PrincipalTitle> */}
          <div className="w-full h-auto max-h-4/5 lg:h-[299px] m-auto bg-vox-2 border-vox-5 border-[.5px] rounded-vox-5 bg-vox-3 p-3">
            {/* <img className="w-full h-full object-cover rounded-[3.5px]" src={images[3]} alt="" /> */}
          </div>
          <div className="w-full grid grid-cols-12 gap-5 my-12">
            <div className="col-span-6">
                <MainTitle>Descrição do Projeto</MainTitle>
                {/* <p>
                  Praesent sed ipsum a ex congue ultrices. Cras iaculis libero quis odio feugiat, eu efficitur urna tempus. Integer sagittis nulla felis, vel venenatis felis dignissim ac. In eget commodo risus. Sed consequat aliquam urna vel mollis. Curabitur non nunc egestas, ullamcorper libero sed, scelerisque neque. Praesent eleifend condimentum leo nec rutrum. Donec dapibus fermentum massa. Quisque iaculis suscipit diam.
                </p> */}
                <p>
                  {/* {description} */}
                </p>
            </div>
            <div className="col-span-6 w-full h-full bg-vox-2 border-vox-5 border-[.5px]  rounded-vox-5 bg-vox-3 p-3">
                {/* <img className="aspect-square w-full h-full object-cover rounded-[3.5px]" src={images[1]}  alt="" /> */}
            </div>
          </div>
          <div className="w-full lg:h-[299px] m-auto bg-vox-2 border-vox-5 border-[.5px]  rounded-vox-5 bg-vox-3 p-3">
                {/* <img className="w-full h-full object-cover rounded-[3.5px]" src={images[2]} alt="" /> */}
          </div>
        </div>
      </section>
    </main>
  );
}
