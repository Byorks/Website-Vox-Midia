import MainButton from "./MainButton";
import { Link } from "react-router";

export default function ButtonIcon({ path, type, children }) {
  return (
    <Link to={path}>
      <button 
        type={type}
        className={` bg-stone-950 w-full px-6 py-1 rounded-vox-5 border-1 border-neutral-700 text-white text-center font-normal font-pt-sans text-base hover:bg-vox-3 hover:border-vox-7 duration-150 ease-in-out cursor-pointer flex justify-center`}
      >
        {children}
      </button>
    </Link>
  );
}
