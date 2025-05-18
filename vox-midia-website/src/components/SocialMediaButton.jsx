export default function SocialMediaButton (props) {
    return(
        <button className='aspect-square w-[55px] '>
            {props.children}
        </button>
    );
}