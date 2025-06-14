import { Link } from "react-router";

export default function AreaSmallCard({path, children}) {
  return (
    <Link
      to={path}
      className={
        "block w-[216px] h-[89px] bg-vox-2 border-vox-6 border-[.25px]"
      }
    >
      <div className="w-full h-full flex items-center justify-center">
        <h3 className="font-league-spartan font-medium text-vox-7 text-2xl">
          {children}
        </h3>
      </div>
    </Link>
  );
}
