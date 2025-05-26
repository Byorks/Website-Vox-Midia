import HomeCarousel from "../components/HomeCarousel";
import MainTitle from "../components/MainTitle";
import HomeCasesCarousel from "../components/HomeCasesCarousel";
import CardCase from "../components/CardCases";
import MainButton from "../components/MainButton";
import AreaSmallCard from "../components/AreaSmallCard";


export default function HomePage () {
    return (
        	<>
            <section className="">
                <HomeCarousel></HomeCarousel>
            </section>

            <section className="my-16 flex flex-col items-center">
                <MainTitle>Cases</MainTitle>
                <HomeCasesCarousel />
                <MainButton space="my-8">Conheça o portfólio</MainButton>
            </section>

            <section className="bg-vox-2">
                <MainTitle>Principais Áreas de Atuação</MainTitle>
                <div>
                    {/* Criar lista com map */}
                    <AreaSmallCard>Marketing</AreaSmallCard>
                    <AreaSmallCard>Marketing</AreaSmallCard>
                </div>
            </section>
            </>
    );
}