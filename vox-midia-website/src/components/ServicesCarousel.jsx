import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';

import ServiceCard from "./CardServices";
import ServiceDescriptionCard from "./CardServicesDescription";

export default function ServicesCarousel({cardList}) {
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
                {cardList.map((card, index) => (
                  // Aqui controla o tamanho de cada div
                  // TODO -> Fazer aparecer 2 cards no tablet
                  <CarouselItem className="basis-1/1 lg:basis-1/3 pl-3" key={index}> 
                    <div className="flex justify-around">
                        <ServiceDescriptionCard {...card}></ServiceDescriptionCard>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="-right-3 md:-right-6 lg:-right-10">
              </CarouselNext>
              <CarouselPrevious className="-left-3 md:-left-6 lg:-left-10">
              </CarouselPrevious>
        </Carousel>
    );
} 