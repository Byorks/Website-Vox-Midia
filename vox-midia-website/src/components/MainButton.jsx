import { Link } from "react-router";

export default function MainButton(props) {
  console.log(props);

  // Com space consegue-se inserir classes personalizadas dependendo do local utilizado
  return (
    <Link to={props.path}>
      <button
        className={`${props.space} h-[${props.height}px] bg-stone-950 px-9 py-1 rounded-vox-5 border-1 border-neutral-700 text-white text-center font-bold font-pt-sans hover:bg-vox-3 hover:border-vox-7 duration-150 ease-in-out cursor-pointer`}
      >
        {props.children}
      </button>
    </Link>
  );
}
