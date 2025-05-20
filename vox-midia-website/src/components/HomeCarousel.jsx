import  gnvImage  from '../assets/banners/gnv-img.jpg'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';

export default function HomeCarousel() {
  return (
    <Carousel 
        className="w-full"
        plugins={[
            Autoplay({
                delay: 8000,
            }),
        ]}
    >
      <CarouselContent className="w-full -ml-0 ">
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem className='basis-full pl-0 max-h-[453px]' key={index}>
            <div className="flex h-full w-full ">
                <img className='object-cover' src={gnvImage} alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
