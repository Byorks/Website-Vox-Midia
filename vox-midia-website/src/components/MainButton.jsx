export default function MainButton (props) {
    return (
        <button className={`bg-stone-950 px-9 py-3 rounded-[5px] outline-1 outline-neutral-700 text-white text-center font-bold font-['PT_Sans']`}url={props.url} >
            {props.children}
        </button>
    )
}