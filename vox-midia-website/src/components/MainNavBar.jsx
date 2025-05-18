import voxLogoHorizontal from '../assets/logo-vox-horinzontal.svg';
import voxLogoVertical from '../assets/logo-vox-horizontal2.svg';
import MainButton from './MainButton';
import './MainNavBar.css';
import { useState } from 'react';
// Router
import { Link } from 'react-router';

// Icons
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

export default function MainNavBar (props) {
    let LINKS = [
        {name:"Cases", path:"/"},
        {name:"Serviços", path:"/"},
        {name:"Sobre nós", path:"/"},
    ];

    const [open, setOpen] = useState(false);

    const handleOpen = () => {

    }

    return (
        <header id="main-header" className='h-[66px] w-full bg-vox-3/80 backdrop-blur-[4px] px-6 md:px-8 flex justify-between items-center fixed top-0 left-0'>
            
            <div className='flex'>
                  <img 
                    className='md:block hidden'
                    src={voxLogoHorizontal}
                    alt="Vox & Mídia Logotipo" 
                />

                <img 
                    className='md:hidden order-2 px-6'
                    src={voxLogoVertical} alt="Vox & Mídia Logotipo" 
                />
                {/* On click está invertendo o valor de open ao clicar */}
                <div onClick={()=> setOpen(!open)} className='block md:hidden cursor-pointer order-1'>
                    <Menu className={open ? 'hidden' : undefined} color='white' size={32}/>
                    <X className={ !open ? 'hidden' : undefined }  color='white' size={32}></X>
                </div>
              
            </div>
          
            <nav className='m-0'>
                <ul className={`md:flex md:items-center md:gap-6 md:pb-0 pb-12 md:static absolute left-0 top-15 md:bg-vox-3/0 md:backdrop-blur-none bg-vox-3/80 backdrop-blur-[4px] md:z-auto z-[-1] md:w-auto w-3xs md:pl-0  transition-all duration-300 ease-in-out ${open ? 'left-0' : 'left-[-400px]'} rounded-br-vox-5 md:border-0 border-vox-6 border-b-[0.5px] border-r-[0.5px]`}>
                    {
                    LINKS.map((link) => (
                        <li key={link.name} className='text-base md:py-0 py-4 pl-6 border-b-[0.5px] border-vox-6 md:border-0 '>
                            <Link to={link.path} className='text-vox-7 hover:font-bold font-pt-sans duration-300 ease-in-out'>{link.name}</Link>
                        </li>
                    ))
                    }

                    <MainButton space='md:ml-0 ml-6 md:mt-0 mt-4'
                    >Contato
                    </MainButton>
                </ul>

            

                {/* <ul className='flex items-center gap-6'>
                    <li>
                        {/* <Link className='text-white font-pt-sans text-base' to={'cases'}>Cases</Link>
                        <a className='text-white font-pt-sans text-base hover:font-bold' href="">Cases</a></li>
                    <li><a className='text-white font-pt-sans text-base hover:font-bold' href="">Serviços</a></li>
                    <li><a className='text-white font-pt-sans text-base hover:font-bold' href="">Sobre nós</a></li>
                    <li><MainButton height={"1000"}>Contato</MainButton></li>
                </ul> */}
            </nav>
        </header>
    );
 
}