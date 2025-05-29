import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowBigLeft } from "lucide-react";
import CaseCard from "./CardCases";
import path from "path";

//Depois vou ter que inserir os dados através de uma lista de objetos

export default function HomeCasesCarousel(props) {
  let CASES = [
    {
      title: "",
      img: "",
      path: "",
    },    
    {
      title: "",
      img: "",
      path: "",
    },    
    {
      title: "",
      img: "",
      path: "",
    },
    {
      title: "",
      img: "",
      path: "",
    },
  ]

  return (
    <Carousel
      className="w-full max-w-[80vw] container m-auto"
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      {/* Pode ser inserido um array com objetos e vamos renderizando o que quisermos */}
      <CarouselContent className="-ml-3 flex justify-around">
        {CASES.map((_, index) => (
          // Aqui controla o tamanho de cada div
          <CarouselItem className="basis-1/1 md:basis-1/3 pl-3" key={index}> 
            <div className="flex justify-around">
                <CaseCard></CaseCard>
            </div>
          
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="-right-3 md:-right-10">
      </CarouselNext>
      <CarouselPrevious className="-left-3 md:-left-10">
      </CarouselPrevious>
    </Carousel>
  );
}
