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
              <div >
                <SocialMediaButton>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3335 4.00016C6.38798 4.00016 4.00016 6.38798 4.00016 9.3335V22.6668C4.00016 25.6123 6.38798 28.0002 9.3335 28.0002H22.6668C25.6123 28.0002 28.0002 25.6123 28.0002 22.6668V9.3335C28.0002 6.38798 25.6123 4.00016 22.6668 4.00016H9.3335ZM1.3335 9.3335C1.3335 4.91522 4.91522 1.3335 9.3335 1.3335H22.6668C27.0851 1.3335 30.6668 4.91522 30.6668 9.3335V22.6668C30.6668 27.0851 27.0851 30.6668 22.6668 30.6668H9.3335C4.91522 30.6668 1.3335 27.0851 1.3335 22.6668V9.3335Z" fill="currentColor"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6446 11.9857C15.8123 11.8623 14.9624 12.0045 14.2156 12.392C13.4688 12.7795 12.8632 13.3926 12.4849 14.1441C12.1066 14.8956 11.975 15.7473 12.1087 16.578C12.2423 17.4086 12.6345 18.176 13.2294 18.7709C13.8243 19.3658 14.5917 19.758 15.4224 19.8917C16.253 20.0253 17.1047 19.8937 17.8562 19.5154C18.6077 19.1372 19.2208 18.5316 19.6083 17.7848C19.9958 17.038 20.138 16.188 20.0146 15.3557C19.8887 14.5068 19.4931 13.7209 18.8863 13.114C18.2794 12.5072 17.4935 12.1116 16.6446 11.9857ZM12.9874 10.025C14.232 9.37916 15.6487 9.14223 17.0357 9.34792C18.4506 9.55772 19.7605 10.217 20.7719 11.2284C21.7833 12.2398 22.4426 13.5497 22.6524 14.9646C22.8581 16.3517 22.6212 17.7683 21.9753 19.0129C21.3295 20.2576 20.3076 21.2669 19.0551 21.8974C17.8026 22.5278 16.3832 22.7472 14.9987 22.5245C13.6143 22.3017 12.3353 21.6481 11.3438 20.6565C10.3523 19.665 9.69863 18.386 9.47585 17.0016C9.25308 15.6172 9.47252 14.1977 10.103 12.9452C10.7334 11.6927 11.7427 10.6708 12.9874 10.025Z" fill="currentColor"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0002 8.66683C22.0002 7.93045 22.5971 7.3335 23.3335 7.3335H23.3468C24.0832 7.3335 24.6802 7.93045 24.6802 8.66683C24.6802 9.40321 24.0832 10.0002 23.3468 10.0002H23.3335C22.5971 10.0002 22.0002 9.40321 22.0002 8.66683Z" fill="currentColor"/>
                  </svg>
                </SocialMediaButton>
                <SocialMediaButton>

                </SocialMediaButton>
                <SocialMediaButton>
                  
                </SocialMediaButton>
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
