import  introBanner  from '../assets/banners/banner-intro.png';
import introBannerX2 from '../assets/banners/banner-intro-x2.png';
import introBannerGnv from '../assets/banners/gnv-img.jpg';
import introBannerMobile  from '../assets/banners/banner-intro-mobile.png'

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
          <CarouselItem className='basis-full pl-0 ' key={index}>
            <div className="flex h-auto w-full ">
              <img className='block sm:hidden w-full' src={introBannerMobile} alt="Banner Vox & Mídia" />
              <img className='hidden sm:block md:hidden w-full' src={introBanner} alt="Banner Vox & Mídia" />
              <img className='hidden md:block  w-full' src={introBannerX2} alt="Banner Vox & Mídia" />
                {/* <img 
                    className='object-cover' 
                    src={introBanner}
                    srcSet={`${introBannerMobile} 430w, ${introBanner} 1440w, ${introBannerX2} 2880w`}
                    
                    alt="Banner Vox & Mídia" 
                /> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
