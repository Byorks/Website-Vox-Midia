import { Link } from "react-router";

export default function SocialMediaButton (props) {
    return(
        <Link target="_blank" to={props.pathName}>
            <button type="button" className='aspect-square w-[55px] bg-vox-3 hover:bg-vox-2 active:bg-vox-3 active:border-vox-7 transition-all duration-300 ease-in-out flex justify-center items-center border-2 border-[#3A3A3A] cursor-pointer'>
                <span className="text-vox-6 active:text-vox-7">
                    {props.children}
                </span>
            </button>
        </Link>
    );
}