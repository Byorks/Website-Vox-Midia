import HomeCarousel from "../components/HomeCarousel";
import MainTitle from "../components/MainTitle";
import HomeCasesCarousel from "../components/HomeCasesCarousel";
import CardCase from "../components/CardCases";


export default function HomePage () {
    return (
        	<>
            <section className="">
                <HomeCarousel></HomeCarousel>
            </section>

            <section className="my-16">
                <MainTitle>Cases</MainTitle>
                <HomeCasesCarousel>
                </HomeCasesCarousel>
                
            </section>
            </>
    );
}