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
import RatingCard from "./CardRating";
import { REVIEWS } from "../ratings";

//Depois vou ter que inserir os dados através de uma lista de objetos

export default function HomeRatingsCarousel(props) {
  return (
    <Carousel
      className="w-full max-w-[80%] container m-auto"
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      {/* Pode ser inserido um array com objetos e vamos renderizando o que quisermos */}
      <CarouselContent className="-ml-3 flex justify-around">
        {REVIEWS.map((review, index) => (
          // Aqui controla o tamanho de cada div
          <CarouselItem 
            className="basis-1/1 md:basis-1/1 xl:basis-1/3 pl-3 flex justify-center" key={index}>
            <RatingCard 
              img={review.img}
              name={review.name}
              enterprise={review.enterprise}
              phrase={review.phrase}
              description={review.description}
            />
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
