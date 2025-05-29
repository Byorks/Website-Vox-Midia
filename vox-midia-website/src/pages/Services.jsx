import MainTitle from "../components/MainTitle";
import ServiceCard from "../components/CardServices";
import ServicesCarousel from "../components/ServicesCarousel";
import MainButton from "../components/MainButton";
import { Link } from "react-router";

export default function ServicesPage() {
  let CARDS = [
    {
      title: "Marketing",
      path: "/",
    },
    {
      title: "Tecnologia",
      path: "/",
    },
    {
      title: "Marketing",
      path: "/",
    },
  ];

  let CARDSMARKETING = [
    {
      title: "Estratégia Digital",
      description:
        "Planejamento completo que integra canais digitais para construir presença online consistente, desde análise de persona até definição de táticas para cada etapa do funil de vendas.",
    },
    {
      title: "Mídias Sociais",
      description:
        "Gestão profissional de redes sociais com conteúdo estratégico, gestão de comunidade e anúncios patrocinados para construir relacionamentos duradouros e converter seguidores em clientes.",
    },
    {
      title: "SEO & Conteúdo",
      description:
        "Otimização técnica e criação de conteúdo relevante para melhorar posicionamento orgânico nos buscadores, atraindo tráfego qualificado e estabelecendo autoridade no mercado.",
    },
    {
      title: "Performance (Google Ads/Meta Ads)",
      description:
        "Campanhas digitais altamente segmentadas com mensagens persuasivas, testes constantes e otimização contínua para maximizar conversões dentro do orçamento definido.",
    },
  ];

  return (
    <main>
      <section className="w-screen m-auto py-20">
        <MainTitle>Onde Atuamos</MainTitle>
        <div className="container m-auto">
          <div className="flex gap-8 items-center flex-col md:flex-row justify-around">
            {CARDS.map((card) => (
              <Link to={card.path}>
                <ServiceCard>{card.title}</ServiceCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="w-screen m-auto bg-vox-2 flex items-center flex-col">
        <div className="flex flex-col">
          <MainTitle marginBotton={"mb-3"}>Marketing</MainTitle>
          <p className="text-center mb-12">
            Estratégias que geram conexões reais e resultados mensuráveis.
          </p>
        </div>
        <div className="flex flex-col items-center">
            <ServicesCarousel cardList={CARDSMARKETING}></ServicesCarousel>
            <MainButton space="my-12">Conheça exemplos</MainButton>
        </div>

        
      </section>
    </main>
  );
}
