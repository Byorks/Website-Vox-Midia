import MainTitle from "./MainTitle";
import SocialMediaButton from "./SocialMediaButton";

import { Link } from "react-router";

export default function MainFooter() {

 let LINKS = [
   {name:"Home", path:"/"},
   {name:"Cases", path:"/"},
   {name:"Serviços", path:"/"},
   {name:"Contato", path:"/"},
   {name:"Sobre nós", path:"/"},
 ];

  return (
    <>
      <footer className="bg-vox-2 w-screen @container pt-8">

        <div className="@md:w-[80%] m-auto max-w-[1128px] md:columns-2 md:flex md:justify-between"> 
          <div className="flex flex-col w-full md:w-[50vh]" >
            <MainTitle>Conheça mais</MainTitle>
            <ul>
              {
              LINKS.map((link) => (
                  <li key={link.name} className='text-base py-3'>
                      <Link to={link.path} className='text-vox-7 hover:text-vox-8 hover:font-bold font-pt-sans duration-300 ease-in-out'>{link.name}</Link>
                  </li>
              ))
              }
            </ul>
            <div>
              <MainTitle>Fale com a Vox & Mídia</MainTitle>
              <div>
                <img src="" alt="" />
                <p></p>
              </div>
              <div>
                <img src="" alt="" />
                <p></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-[50vh]">
            <div>
              <MainTitle>Nossas mídias sociais</MainTitle>
              <div>
                <SocialMediaButton></SocialMediaButton>
              </div>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper non augue in lobortis. Donec sem sapien, blandit id
                elementum sed, tristique id est. Vivamus eleifend lorem eget
                eros blandit facilisis eu eu mi. Quisque semper cursus
                ullamcorper. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Curabitur a tortor
                quis nisl suscipit facilisis tempus id ligula. Donec rutrum sit
                amet sapien id ornare. Suspendisse quis ullamcorper eros. Fusce
                aliquam sem ut hendrerit tincidunt. Suspendisse id diam quam.
                Quisque vitae velit tortor.
              </p>
            </div>
          </div>
        </div>  
 
        
        <div className="bg-vox-1 h-8 w-full">
          <div className="@md:w-[80%] m-auto max-w-[1128px]">
            <p className="text-sm">©Vox&Mídia 2025</p>
          </div>
         
        </div>
      </footer>
    </>
  );
}
