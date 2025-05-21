import  introBanner  from '../assets/banners/banner-intro.png';
import introBannerX2 from '../assets/banners/banner-intro-x2.png';
import introBannerGnv from '../assets/banners/gnv-img.jpg';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';

export default function HomeCarousel() {
  let srcSetList = introBanner + " 1440w " + introBannerX2 + " 2880w";
  console.log(srcSetList)
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
          <CarouselItem className='basis-full pl-0 ' key={index}>
            <div className="flex h-auto w-full ">
                <img className='object-cover' src={introBanner}
                    srcSet={srcSetList}
                    sizes='(max-width: 1440px) 1440px, 2880px'
                    alt="" 
                />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
