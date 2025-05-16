import voxLogo from '../assets/logo-vox-horinzontal.svg' 
import MainButton from './MainButton'
import './Header.css'
import { Link } from 'react-router-dom'

export default function MainHeader (props) {
    return (
        <header className='bg-vox-3 backdrop-opacity-80 backdrop-blur-[4px] h-[66px] w-auto px-8 flex justify-between items-center hover:bgc' id="main-header">
            <img src={voxLogo} alt="Vox & Mídia Social Mídia" />
            <nav>
                <ul className='flex items-center gap-6'>
                    <li>
                        {/* <Link className='text-white font-pt-sans text-base' to={'cases'}>Cases</Link> */}
                        <a className='text-white font-pt-sans text-base hover:font-bold' href="">Cases</a></li>
                    <li><a className='text-white font-pt-sans text-base hover:font-bold' href="">Serviços</a></li>
                    <li><a className='text-white font-pt-sans text-base hover:font-bold' href="">Sobre nós</a></li>
                    <li><MainButton height={"1000"}>Contato</MainButton></li>
                </ul>
            </nav>
        </header>
    )
 
}