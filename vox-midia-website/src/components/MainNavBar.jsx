import voxLogoHorizontal from '../assets/logo-vox-horinzontal.svg';
import voxLogoVertical from '../assets/logo-vox-horizontal2.svg';
import MainButton from './MainButton';
import './MainNavBar.css';
import { useState } from 'react';
// Router
import { NavLink } from 'react-router';
import { Link } from 'react-router';

// Icons
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

export default function MainNavBar (props) {
    let LINKS = [
        {name:"Cases", path:"/cases"},
        {name:"Serviços", path:"/services"},
        {name:"Sobre nós", path:"/about"},
    ];

    const [open, setOpen] = useState(false);

    const handleOpen = () => {

    }
    
    // Estilização
    let navStyle = 'md:flex md:items-center md:gap-6 md:pb-0 pb-12 md:static absolute left-0 top-[66px] md:bg-vox-3/0 md:backdrop-blur-none bg-vox-3/80 backdrop-blur-[4px] md:z-auto z-[-1] md:w-auto w-3xs md:pl-0  transition-all duration-300 ease-in-out rounded-br-vox-5 md:border-0 border-vox-6 border-b-[0.5px] border-r-[0.5px]';

    return (
        <header id="main-header" className='h-[66px] w-full bg-vox-3/80 backdrop-blur-[4px]  md:px-8 flex justify-between items-center sticky z-1000 top-0 left-0'>
            
            <div className='p-6 md:p-0 flex w-full'>
                {/* Logo Desktop */}
                <Link className='hidden md:block' to="/">
                    <img 
                        className='md:block hidden'
                        src={voxLogoHorizontal}
                        alt="Vox & Mídia Logotipo" 
                    />
                </Link>
                  
                {/* Logo Mobiile */}
                <Link className='order-2' to="/">
                    <img 
                    className='md:hidden pl-6'
                    src={voxLogoVertical} alt="Vox & Mídia Logotipo" 
                    />
                </Link>
                
                {/* Menu hamburguer ícone */}
                <div onClick={()=> setOpen(!open)} className='block md:hidden cursor-pointer order-1'>
                    <Menu className={open ? 'hidden' : undefined} color='white' size={32}/>
                    <X className={ !open ? 'hidden' : undefined }  color='white' size={32}></X>
                </div>
              
            </div>

            {/* Menu */}
            <nav className='m-0'>
                <ul className={`${open ? 'left-0' : 'left-[-400px]'} ${navStyle}`}>
                    {
                    LINKS.map((link) => (
                        <li key={link.name} className='lg:w-[95px] text-base md:py-0 py-4 pl-6 lg:p-3  border-b-[0.5px] border-vox-6 md:border-0 '>
                            <NavLink onClick={() => setOpen(!open)} to={link.path} className='text-vox-7 hover:text-vox-8 hover:font-bold font-pt-sans duration-300 ease-in-out'>{link.name}</NavLink>
                        </li>
                    ))
                    }

                    <MainButton
                        function={() => setOpen(!open)}  
                        space='md:ml-0 ml-6 md:mt-0 mt-4'
                        path='/contact'
                    >Contato
                    </MainButton>
                </ul>
            </nav>
        </header>
    );
 
}