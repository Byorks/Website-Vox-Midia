import HomeCarousel from "../components/HomeCarousel";
import MainTitle from "../components/MainTitle";
import HomeCasesCarousel from "../components/HomeCasesCarousel";
import CaseCard from "../components/CardCases";
import MainButton from "../components/MainButton";
import AreaSmallCard from "../components/AreaSmallCard";
import HomeRatingsCarousel from "../components/HomeRatingsCarousel";

export default function HomePage () {
    let AREASCARDS = [
        {
            path: "cases/marketing",
            area: "Marketing"
        },
        {
            path: "cases/web",
            area: "Web"
        },
        {
            path: "cases/branding",
            area: "Branding"
        },
        {
            path: "cases/gamificacao",
            area: "Gamificação"
        },
    ]

    return (
        	<>
            <section className="w-screen">
                <HomeCarousel></HomeCarousel>
            </section>

            <section className="w-screen mt-16 mb-8 flex flex-col items-center">
                <MainTitle>Cases</MainTitle>
                <HomeCasesCarousel />
                <MainButton space="my-8">Conheça o portfólio</MainButton>
            </section>

            <section className="bg-vox-2 py-8 my-8">
                <div className="w-[80%] m-auto max-w-[1128px]">
                    <MainTitle>Principais Áreas de Atuação</MainTitle>
                    <div className="flex flex-col items-center md:flex-row md:justify-between gap-4">
                        {/* Criar lista com map */}
                        {AREASCARDS.map((card) => (
                           <AreaSmallCard to={card.path}>{card.area}</AreaSmallCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-8 mb-16">
                <MainTitle>Avaliações</MainTitle>  
                <HomeRatingsCarousel></HomeRatingsCarousel>                 
            </section>
        </>
    );
}