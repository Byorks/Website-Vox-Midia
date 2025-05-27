import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowBigLeft } from "lucide-react";
import CardCase from "./CardCases";
import path from "path";
import RatingCard from "./RatingCard";

//Depois vou ter que inserir os dados através de uma lista de objetos

export default function HomeRatingsCarousel(props) {
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
      className="md:w-full max-w-[80%] lg:container m-auto"
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
                <RatingCard></RatingCard>
            </div>
          
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext>
      </CarouselNext>
      <CarouselPrevious>
      </CarouselPrevious>
    </Carousel>
  );
}
