import { Link } from "react-router";

export default function CaseLink ({title, image, path}) {
    return (
        <Link to={path} relative="path">
            <div className="aspect-square bg-vox-3 border border-vox-6 p-2.5">
                <div className="w-full h-full">
                    <img className="w-full h-full object-cover " src={image} alt={title} />
                </div>
                
            </div>
        </Link>
    );
}