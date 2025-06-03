import MainTitle from "../components/MainTitle";
import ServiceCard from "../components/CardServices";
import ServicesCarousel from "../components/ServicesCarousel";
import MainButton from "../components/MainButton";
import { Link } from "react-router";

export default function ServicesPage() {
  let CARDS = [
    {
      title: "Marketing",
      path: "#marketing-section",
    },
    {
      title: "Tecnologia",
      path: "#tecnology-section",
    },
    {
      title: "Branding",
      path: "#branding-section",
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

  let CARDSTECNOLOGY = [
    {
      title: "Gamificação Corporativa",
      description:
        "Transforme treinamentos e processos internos em experiências envolventes com missões, rankings e recompensas digitais, aumentando produtividade e engajamento de equipes de forma mensurável.",
    },
    {
      title: " Desenvolvimento de Apps & Sites",
      description:
        "Criação de plataformas digitais sob medida, com design intuitivo e tecnologia de ponta, garantindo alta performance, segurança e uma experiência perfeita para usuários em todos os dispositivos.",
    },
    {
      title: "Chatbots & IA",
      description:
        "Automatize atendimentos e otimize operações com assistentes virtuais inteligentes, capazes de aprender com interações para oferecer respostas cada vez mais precisas e humanizadas 24 horas por dia.",
    },
    {
      title: "Análise de Dados",
      description:
        "Extraia insights valiosos para decisões estratégicas através de relatórios personalizados e dashboards interativos, identificando oportunidades de melhoria.",
    },
  ];


  let CARDSBRANDING = [
    {
      title: "Identidade Visual",
      description:
        "Desenvolvimento de sistemas visuais completos que comunicam a essência da marca através de logos, cores, tipografias e elementos gráficos aplicados com consistência.",
    },
    {
      title: "Posicionamento de Marca",
      description:
        "Definição de território único no mercado, com promessa de valor clara e diferenciais competitivos que ressoam no público-alvo e guiam todas as comunicações.",
    },
    {
      title: "Nomeamento & Storytelling",
      description:
        "Criação de nomes marcantes e narrativas emocionantes que traduzem a personalidade da marca e criam conexões profundas com diferentes audiências.",
    },
    {
      title: "Manual da Marca",
      description:
        "Documento estratégico que padroniza o uso de todos os elementos da identidade visual e verbal em diferentes mídias e pontos de contato.",
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

      <section id="marketing-section" className="w-screen m-auto bg-vox-2 flex items-center flex-col">
        <div className="flex flex-col mt-12">
          <MainTitle marginBotton={"mb-3"}>Marketing</MainTitle>
          <p className="text-center mb-12">
            Estratégias que geram conexões reais e resultados mensuráveis
          </p>
        </div>
        <div className="flex flex-col items-center">
            <ServicesCarousel cardList={CARDSMARKETING}></ServicesCarousel>
            <MainButton space="my-12">Conheça exemplos</MainButton>
        </div>
      </section>

      <section id="tecnology-section" className="w-screen m-auto bg-vox-2 flex items-center flex-col">
        <div className="flex flex-col mt-12">
          <MainTitle marginBotton={"mb-3"}> Tecnologia</MainTitle>
          <p className="text-center mb-12">
            Soluções inteligentes que impulsionam negócios
          </p>
        </div>
        <div className="flex flex-col items-center">
            <ServicesCarousel cardList={CARDSBRANDING}></ServicesCarousel>
            <MainButton space="my-12">Conheça exemplos</MainButton>
        </div>
      </section>

      <section id="branding-section" className="w-screen m-auto mb-32 bg-vox-2 flex items-center flex-col">
        <div className="flex flex-col mt-12">
          <MainTitle marginBotton={"mb-3"}> Branding</MainTitle>
          <p className="text-center mb-12">
            Construção de marcas memoráveis
          </p>
        </div>
        <div className="flex flex-col items-center">
            <ServicesCarousel cardList={CARDSBRANDING}></ServicesCarousel>
            <MainButton space="my-12">Conheça exemplos</MainButton>
        </div>
      </section>
    </main>
  );
}
