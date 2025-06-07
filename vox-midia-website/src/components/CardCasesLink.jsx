import { Link } from "react-router";


// TODO => Retirar path

export default function CaseLink ({id,title, images, logo, path}) {  
    console.log(images)
    
    return (
        <Link to={`project/${id}`} relative="path">
            <div className="aspect-square bg-vox-3 border border-vox-6 p-2.5">
                <div className="w-full h-full">
                    <img className="w-full h-full object-cover " src={logo} alt={title} />
                </div>
                {/* TODO -> Arrumar imagem, mudei o caminho */}
            </div>
        </Link>
    );
}