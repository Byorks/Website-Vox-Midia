import voxLogo from '../assets/logo-vox-horinzontal.svg' 
import MainButton from './MainButton'
import './Header.css'

export default function Header (props) {
    return (
        <header className='h-[66px] w-auto px-8 flex justify-between items-center' id="main-header">
            <img src={voxLogo} alt="Vox & Mídia Social Mídia" />
            <nav>
                <ul className='flex items-center gap-6'>
                    <li>
                        <a className='text-white' href="">Cases</a></li>
                    <li><a className='text-white' href="">Serviços</a></li>
                    <li><a className='text-white' href="">Sobre nós</a></li>
                    <li><MainButton>Contato</MainButton></li>
                </ul>
            </nav>
        </header>
    )
 
}