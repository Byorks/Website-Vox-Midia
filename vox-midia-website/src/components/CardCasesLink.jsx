import { Link } from "react-router";

<<<<<<< HEAD

// TODO => Retirar path

=======
>>>>>>> b0d5c55a1d7056180f9cdc5b3ebd0eb5d5b5d4d8
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