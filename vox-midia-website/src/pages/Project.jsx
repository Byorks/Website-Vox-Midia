import PrincipalTitle from "../components/PrincipalTitle";
import MainTitle from "../components/MainTitle";

export default function ProjectPage() {
  return (
    <main>
      <section className="w-full m-auto container lg:max-w-4/5 px-4 sm:px-12 lg:px-6 mb-32 md:mb-48 py-16">
        <div className="w-full m-auto">
          <PrincipalTitle>Nome do projeto </PrincipalTitle>
          <div className="w-full lg:h-[299px] m-auto bg-vox-2 border-vox-5 border-[.5px] my-8 py-6 px-6 md:px-9 mb-32 md:mb-16">
                <img src="" alt="" />
          </div>
          <div className="w-full grid grid-cols-12 gap-5">
            <div className="col-span-6">
                <MainTitle>Descrição do Projeto</MainTitle>
                <p>
                    Praesent sed ipsum a ex congue ultrices. Cras iaculis libero quis odio feugiat, eu efficitur urna tempus. Integer sagittis nulla felis, vel venenatis felis dignissim ac. In eget commodo risus. Sed consequat aliquam urna vel mollis. Curabitur non nunc egestas, ullamcorper libero sed, scelerisque neque. Praesent eleifend condimentum leo nec rutrum. Donec dapibus fermentum massa. Quisque iaculis suscipit diam.
                </p>
            </div>
            <div className="col-span-6 w-full h-full bg-vox-2 border-vox-5 border-[.5px]">
                <img src="" alt="" />
            </div>
          </div>
          <div className="w-full lg:h-[299px] m-auto bg-vox-2 border-vox-5 border-[.5px] my-8 py-6 px-6 md:px-9 mb-32 md:mb-16">
                <img src="" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
