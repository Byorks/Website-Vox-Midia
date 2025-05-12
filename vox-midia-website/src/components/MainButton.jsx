export default function MainButton (props) {
    console.log(props)
    return (
        <button className={`h-[${props.height}px] bg-stone-950 px-9 py-3 rounded-border border-1 border-neutral-700 text-white text-center font-bold font-pt-sans hover:bg-vox-3 hover:border-vox-7`}>
            {props.children}
        </button>
    )
}