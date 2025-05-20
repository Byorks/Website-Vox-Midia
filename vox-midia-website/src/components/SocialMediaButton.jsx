import { Link } from "react-router";

export default function SocialMediaButton (props) {
    return(
        <Link>
            <button type="button" className='aspect-square w-[55px] bg-vox-3 flex justify-center items-center border-2 border-[#3A3A3A]'>
                <span className="text-vox-6">
                    {props.children}
                </span>
            </button>
        </Link>
    );
}