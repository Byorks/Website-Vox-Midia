import { useState } from "react";
<<<<<<< HEAD
import { PROJECTS } from "../data";
=======
import { WEB_CASES } from "../data";
import { SOCIAL_MEDIA_CASES } from "../data";
import { BRANDING_CASES } from "../data";
>>>>>>> b0d5c55a1d7056180f9cdc5b3ebd0eb5d5b5d4d8
import MainTitle from "../components/MainTitle";
import PrincipalTitle from "../components/PrincipalTitle";
import TabButton from "../components/TabButton";
import CaseLink from "../components/CardCasesLink";

export default function CasesPage() {
  const [selectedTopic, setSelectedTopic] = useState("web");

  let tabContent;

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  // Puxar os conteúdos, mas devo pensar se puxo apenas o que vai aparecer por padrão ou tudo
  if ( selectedTopic ) {
<<<<<<< HEAD
    let webCases = PROJECTS.filter((project) => (project.type == 'web'));
    let socialMidiaCases = PROJECTS.filter((project) => (project.type == 'social-media'));
    let brandingCases = PROJECTS.filter((project) => (project.type == 'branding'));
=======
>>>>>>> b0d5c55a1d7056180f9cdc5b3ebd0eb5d5b5d4d8
    
    if (selectedTopic == 'web'){
      tabContent = (
      <div className="w-full grid md:grid-cols-3 xl:grid-cols-5 lg gap-7 px-4 md:px-0">
<<<<<<< HEAD
          {webCases.map((card) => <CaseLink key={card.id} {...card}></CaseLink>)}
=======
          {WEB_CASES.map((card) => <CaseLink key={card.id} {...card}></CaseLink>)}
>>>>>>> b0d5c55a1d7056180f9cdc5b3ebd0eb5d5b5d4d8
      </div>
    )
    } 
    else if (selectedTopic == 'social-media'){
      tabContent = (
      <div className="w-full grid md:grid-cols-3 xl:grid-cols-5 lg gap-7 px-4 md:px-0">
<<<<<<< HEAD
          {socialMidiaCases.map((card) => <CaseLink key={card.id} {...card}></CaseLink>)}
=======
          {SOCIAL_MEDIA_CASES.map((card) => <CaseLink key={card.id} {...card}></CaseLink>)}
>>>>>>> b0d5c55a1d7056180f9cdc5b3ebd0eb5d5b5d4d8
      </div>
    )
    }
    else {
      tabContent = (
      <div className="w-full grid md:grid-cols-3 xl:grid-cols-5 lg gap-7 px-4 md:px-0">
<<<<<<< HEAD
          {brandingCases.map((card) => <CaseLink key={card.id} {...card}></CaseLink>)}
=======
          {BRANDING_CASES.map((card) => <CaseLink key={card.id} {...card}></CaseLink>)}
>>>>>>> b0d5c55a1d7056180f9cdc5b3ebd0eb5d5b5d4d8
      </div>
    )
    }
  } 
  return (
    <>
      <main>
        <section className="w-full m-auto container lg:max-w-4/5 px-4 sm:px-12 lg:px-6 mb-32 md:mb-48 pt-16">
          <div className="w-full lg:h-[299px] m-auto bg-vox-2 border-vox-5 border-[.5px] py-6 px-6 md:px-9 mb-32 md:mb-16">
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
          <div className="w-full m-auto">
            <menu className="w-full flex justify-between md:justify-start gap-6 mb-6 flex-wrap">
              <TabButton
                isSelected={selectedTopic === "web"}
                onSelect={() => handleSelect('web')}
              >
                Web
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "social-media"}
                onSelect={() => handleSelect('social-media')}
              >
                Social Media
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "branding"}
                onSelect={() => handleSelect('branding')}
              >
                Branding
              </TabButton>
            </menu>
            {tabContent}
          </div>
        </section>
      </main>
    </>
  );
}
