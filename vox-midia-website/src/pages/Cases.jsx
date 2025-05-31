import { useState } from "react";
import MainTitle from "../components/MainTitle";
import PrincipalTitle from "../components/PrincipalTitle";
import TabButton from "../components/TabButton";

export default function CasesPage() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <main>
        <section className="w-full m-auto">
          <div className="w-full max-w-[80vw] lg:h-[299px] container m-auto bg-vox-2 border-vox-5 border-[.5px] my-8  py-6 px-9">
            <div className="flex justify-end flex-col h-[70%]">
              <PrincipalTitle className="">Cases</PrincipalTitle>
              <MainTitle marginBotton="mb-3">
                Resultados que transformaram negócios
              </MainTitle>
            </div>

            <div className="w-full flex justify-start h-auto">
              <p className="w-full lg:w-[50%]">
                Praesent sed ipsum a ex congue ultrices. Cras iaculis libero
                quis odio feugiat, eu efficitur urna tempus. Integer sagittis
                nulla felis, vel venenatis felis dignissim ac.{" "}
              </p>
            </div>
          </div>
          <div className="w-full max-w-[80vw]">
            <menu>
              <TabButton
                isSelected={selectedTopic === "web"}
                onSelect={() => handleSelect('web')}
              >
                Web
              </TabButton>
            </menu>
          </div>
        </section>
      </main>
    </>
  );
}
